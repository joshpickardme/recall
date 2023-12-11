import { connectMongoDB } from "@/lib/mongodb"
import Deck from "@/models/Deck";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req, {params}) {
    const {userId = ""} = params
    console.log(userId)

    try {
        await connectMongoDB();
        if(!userId) {
            return res.status(400).json({ success: false, error: 'Missing ID parameter' });
        }

        const decks = await Deck.find({ownerID: userId})

        if(!decks) {
            return res.status(404).json({ success: false, error: 'Decks not foudn by user ID' });
        } else {
            return NextResponse.json({decks})
        }
    } catch (error) {
        console.error('Error in this get req', error)
    }
}