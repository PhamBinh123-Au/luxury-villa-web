import { NextResponse } from "next/server";
import { Booking } from "@/types";

// In-memory store for server runtime
let inMemoryBookings: Booking[] = [
  {
    id: "booking-demo-1",
    villaId: "villa-b1",
    villaName: "B1 Luxury Pool Villa",
    guestName: "Alexander Wright",
    email: "alexander.wright@luxurytravel.com",
    phone: "+44 7911 123456",
    checkIn: "2026-11-15",
    checkOut: "2026-11-20",
    guestsCount: 6,
    specialRequests: "Airport pickup requested. Traveling with 2 children.",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    status: "new",
  },
  {
    id: "booking-demo-2",
    villaId: "villa-b3",
    villaName: "B3 Boutique Pool Villa",
    guestName: "Sophia Tanaka",
    email: "sophia.t@tokyodesign.jp",
    phone: "+81 90 1234 5678",
    checkIn: "2026-12-01",
    checkOut: "2026-12-05",
    guestsCount: 2,
    specialRequests: "Anniversary stay. Please arrange a flower bouquet.",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    status: "confirmed",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    bookings: inMemoryBookings,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.guestName || !body.email || !body.phone || !body.villaId) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newBooking: Booking = {
      id: `booking-${Date.now()}`,
      villaId: body.villaId,
      villaName: body.villaName || "B Villa",
      guestName: body.guestName,
      email: body.email,
      phone: body.phone,
      checkIn: body.checkIn || new Date().toISOString().split("T")[0],
      checkOut: body.checkOut || "",
      guestsCount: Number(body.guestsCount) || 2,
      specialRequests: body.specialRequests || "",
      createdAt: new Date().toISOString(),
      status: "new",
    };

    inMemoryBookings.unshift(newBooking);

    return NextResponse.json({
      success: true,
      message: "Reservation inquiry received successfully",
      booking: newBooking,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    const booking = inMemoryBookings.find((b) => b.id === id);
    if (booking) {
      booking.status = status;
      return NextResponse.json({ success: true, booking });
    }
    return NextResponse.json({ success: false, error: "Booking not found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Update failed" }, { status: 500 });
  }
}

