"use client"

// Imports
import { useState } from "react"
import { useSession } from "next-auth/react"

// Components
import Header from "@/components/structure/Header"
import Main from "@/components/structure/Main"
import ProfileCard from "@/components/ProfileCard"
import StatCard from "@/components/Statcard"
import NotificationBar from "@/components/NotificationBar"
import { RxCardStack } from "react-icons/rx";
import { TbCards } from "react-icons/tb";


export default function Profile() {
    const {status, data: session} = useSession();
    
    return(
        <Main>
            <Header title="Your Profile"></Header>
            <NotificationBar />
            <div className="flex flex-row gap-3">
                <ProfileCard></ProfileCard>
                <StatCard number={32} text={"Flashcard Decks"} icon={<RxCardStack className="scale-[2]"></RxCardStack>}></StatCard>
                <StatCard number={312} text={"Flashcards"} icon={<TbCards className="scale-[2]"></TbCards>}></StatCard>
            </div>
        </Main>
    )
}