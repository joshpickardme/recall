"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"


export default function UserInfo() {
    const {status, data: session} = useSession();

    if (status === 'authenticated') {
        return (
            <div className="flex flex-row gap-4">
                <Image className="rounded-full" src={session?.user?.image} width={60} height={60}></Image>
                <div className="flex flex-col justify-center">
                    <p className="text-white">{session?.user?.name}</p>
                    <p className="text-white">{session?.user?.email}</p>
                </div>
            </div>
        )
    }


}