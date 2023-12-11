import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/User";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req, {params}) {
    const {userEmail = ""} = params
    console.log(userEmail)

    try {
        await connectMongoDB();
        if(!userEmail) {
            return res.status(400).json({ success: false, error: 'Missing email parameter' });
        }

        const user = await User.findOne({email: userEmail});

        if(!user) {
            return res.status(404).json({ success: false, error: 'User not found by email' });
        } else {
            return NextResponse.json({user})
        }
    } catch (error) {
        console.error('Error in this get req', error)
    }
}