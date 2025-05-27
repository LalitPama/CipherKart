import { NextResponse } from 'next/server';
import connectDB from '@/config/db';
import Product from '@/models/Product';

// GET /api/search?q=your-search-text
export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json([], { status: 200 }); // Return empty array if query is empty
  }

  try {
    const regex = new RegExp(query, "i"); // Case-insensitive search
    const products = await Product.find({
      $or: [
        { name: regex },
        { description: regex },      // match in description
        { category: regex }          // match in category
      ]
    });

    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    console.error("Search API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
