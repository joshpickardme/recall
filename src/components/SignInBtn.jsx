"use client"

import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { FiLogOut } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";



export default function SignInBtn({thin}) {
    const { status } = useSession();
    if(status === "authenticated") {
        return (
            <button onClick={() => signOut()} className="text-white flex justify-center items-center gap-3 text-lg min-w-full py-3"> <FiLogOut />{thin ? "" : "Log out"}</button>
        )
    } else {
        return(
            <button onClick={() => signIn('google')} className="text-white flex justify-center items-center gap-3 text-lg min-w-full py-3"> <FiLogIn />{thin ? "" : "Log in"}</button>
        )
    }

}