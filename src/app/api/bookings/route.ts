import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      carId,
      carName,
      firstName,
      lastName,
      email,
      phone,
      pickupDate,
      pickupLocation,
      returnDate,
      returnLocation,
      specialRequests,
      totalDays,
      totalPrice,
    } = body;

    // Validate required fields
    if (!carId || !carName || !firstName || !lastName || !email || !phone || !pickupDate || !returnDate || !pickupLocation || !totalDays || !totalPrice) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const booking = await db.booking.create({
      data: {
        carId,
        carName,
        firstName,
        lastName,
        email,
        phone,
        pickupDate,
        pickupLocation,
        returnDate,
        returnLocation: returnLocation || pickupLocation,
        specialRequests: specialRequests || null,
        totalDays,
        totalPrice,
        status: 'confirmed',
      },
    });

    return NextResponse.json({
      success: true,
      booking: {
        id: booking.id,
        carName: booking.carName,
        status: booking.status,
        totalPrice: booking.totalPrice,
      },
    });
  } catch (error) {
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const bookings = await db.booking.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error('Bookings fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}