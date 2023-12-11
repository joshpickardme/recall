import Deck from "@/models/Deck";

import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";



export async function POST(request) {
    const { name, colour, favourite, cards } = await request.json()

    await connectMongoDB();
    await Deck.create({name, colour, favourite })
    return NextResponse.json({message: "Card Created"})
}