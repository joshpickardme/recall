"use client"

// Imports
import { useSession } from "next-auth/react"
import Image from "next/image";

export default function StatCard({number, text, icon}) {
    const {status, data: session} = useSession();
    return(
        <div className="flex flex-row p-6 bg-white shadow-lg w-80 h-fit rounded-md items-center gap-6">
            {icon}
            <div className="flex flex-col">
                <h1 className="font-bold text-3xl">{number}</h1>
                <p>{text}</p>
            </div>


        </div>
    )
}