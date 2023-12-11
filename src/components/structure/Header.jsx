"use client"

// Imports
import Link from "next/link"

export default function Header({children, icon, link}) {

    if(icon) {
        return(
        <div className="flex flex-row gap-6 sm:flex-row items-center">
            <Link href={link}><div className="scale-150">{icon}</div></Link>
            <h1 className="text-3xl sm:text-3xl font-bold text-[var(--purple)]">{children}</h1>
        </div>
        )
    } else {
        return(
        <div className="flex flex-col gap-3 sm:flex-row justify-between">
            <h1 className="text-3xl sm:text-3xl font-bold text-[var(--purple)]">{children}</h1>
        </div>
        )
    }

}