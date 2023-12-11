"use client";

// Imports
import { usePathname } from "next/navigation";

// Component Imports
import SignInBtn from "./SignInBtn"
import UserInfo from "./UserInfo";
import { useSession } from "next-auth/react";
import logo from '../../public/logo.png'
import logo_small from '../../public/logo_small.png'
import Image from "next/image";
import NavButton from "./NavButton";
import { FaRegUser } from "react-icons/fa";
import { RxCardStack } from "react-icons/rx";
import { RxCardStackPlus } from "react-icons/rx";
import { TiCog, TiCogOutline } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";



export default function Header({setIsThin}) {
    const [thin, setThin] = useState(true)
    const pathname = usePathname()

    function updateThin() {
        console.log('updating')
        setThin(!thin)
    }

    useEffect(() => {
        console.log('path name changed')
        setThin(true)
    }, [pathname])


    const {status, data: session} = useSession();
    return(
        <>
            <div onClick={updateThin} className={`${thin ? "" : "bg-black bg-opacity-60 fixed min-h-full min-w-full"} transition-all`}>p</div>
            <header className={`fixed bg-[var(--purple)] ${thin ? "w-20" : "w-full sm:w-64"} shadow-xl h-screen transition-all`}>
                <main className="flex flex-col items-center h-full z-10 shadow-2xl">
                    <div onClick={updateThin} className="mt-6 scale-150">
                        <FaArrowLeft  className={`bg-[var(--purple)] ${thin ? "rotate-180" : "rotate-0"} hover:cursor-pointer transition-all text-white shadow-lg  rounded-full p-1 scale-150`} />
                    </div>
                    {thin ? <Image className="hover:cursor-pointer p-3 mt-3" src={logo_small} width={70}></Image> :  <Image className="hover:cursor-pointer p-3 mt-3" src={logo} width={150}></Image> }
                    
                    <div className="flex flex-col justify-between w-full h-full mt-12 mb-12">
                        <div className="flex flex-col justify-center min-w-full">
                            <NavButton link={"/profile"} active={true} icon={<FaRegUser />} text={thin ? " " : "My Profile"}></NavButton>
                            <NavButton link={"/decks"} active={false} icon={<RxCardStack />} text={thin ? " " : "My Decks"}></NavButton>
                            <NavButton link={"/decks/create-deck"} active={false} icon={<RxCardStackPlus />} text={thin ? " " : "Create Deck"}></NavButton>
                        </div>
                        <div className="flex flex-col justify-center min-w-full">
                            <NavButton  link={"/settings"} active={false} icon={<TiCogOutline />} text={thin ? " " : "Settings"}></NavButton>
                            <SignInBtn thin={thin}></SignInBtn>
                        </div>
                    </div>
                </main>
            </header>
        </>
    )
}