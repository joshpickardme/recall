"use client"

// Imports
import { useSession } from "next-auth/react"
import Image from "next/image";

export default function ProfileCard() {
    const {status, data: session} = useSession();
    return(
        <div className="flex flex-col justify-between p-6 items-center bg-white shadow-lg w-80 h-[400px] rounded-md">
            <div className="flex flex-col items-center">
                <Image className="rounded-full scale-125 mt-4" src={session?.user?.image} width={60} height={60}></Image>
                <h2 className="mt-6 text-2xl font-medium text-center">{session?.user?.name}</h2>
                <p className="text-sm">Joined: 08/12/2023</p>
            </div>
            <div className="flex flex-col justify-between gap-3">
                <div className="flex flex-col rounded-lg p-2 w-full bg-[var(--gray)]">
                    <p className="text-slate-700">Email:</p>
                    <p className="font-medium">{session?.user?.email}</p>
                </div>
                <div className="flex flex-col rounded-lg p-2 w-full bg-[var(--gray)]">
                    <p className="text-slate-700">Provider:</p>
                    <p className="font-medium">Google</p>
                </div>
            </div>

        </div>
    )
}