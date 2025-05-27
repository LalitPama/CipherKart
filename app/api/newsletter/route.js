import { NextResponse } from 'next/server';
import connectDB from '@/config/db';
import Newsletter from '@/models/Newsletter';

export async function POST(req) {
  await connectDB();
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  try {
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 });
    }

    await Newsletter.create({ email });
    return NextResponse.json({ message: 'Subscribed successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
