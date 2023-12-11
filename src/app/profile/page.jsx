"use client"

// Imports
import { useState } from "react"
import { useSession } from "next-auth/react"

// Components
import Header from "@/components/structure/Header"
import Main from "@/components/structure/Main"
import ProfileCard from "@/components/ProfileCard"
import NotificationBar from "@/components/NotificationBar"

export default function Profile() {
    const {status, data: session} = useSession();
    
    return(
        <Main>
            <Header>Your Profile.</Header>
            <NotificationBar />
            <div>
                <ProfileCard></ProfileCard>
            </div>
        </Main>
    )
}