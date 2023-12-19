"use client"

// Imports
import Link from "next/link"

export default function Header({children, title, icon, link}) {

    if(icon) {
        return(
        <div className="flex flex-row justify-between gap-6 sm:flex-row items-center">
            <div className="flex flex-row items-center gap-6">
                <Link href={link}><div className="scale-150">{icon}</div></Link>
                <h1 className="text-3xl sm:text-3xl font-bold text-[var(--purple)]">{title}</h1>
            </div>

            <div className="flex flex-row items-center gap-3">
                {children}
            </div>
        </div>
        )
    } else {
        return(
        <div className="flex flex-col gap-3 sm:flex-row justify-between">
            <h1 className="text-3xl sm:text-3xl font-bold text-[var(--purple)]">{title}</h1>
            <div className="flex flex-row items-center gap-3">
                {children}
            </div>
        </div>
        )
    }

}