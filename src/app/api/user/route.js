import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/User";
import Deck from "@/models/Deck";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, email } = await request.json()

    await connectMongoDB();
    await User.create({name, email, decks})
    return NextResponse.json({message: "User Registered"})
}