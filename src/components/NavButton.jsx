import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavButton({active, icon, text, link}) {
    const pathname = usePathname();
    return(
        <Link href={link}><button  className={`text-white ${pathname === link ? "bg-[var(--darker-purple)]" : ""} flex justify-center items-center gap-3 text-lg  min-w-full py-3`}>{icon} {text}</button></Link> 
    )
}