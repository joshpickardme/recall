"use client"

// Imports
import { motion } from "framer-motion";


// Components
import Main from "@/components/structure/Main"
import Header from "@/components/structure/Header"
import Card from "@/components/Card";

// Icons
import { FaArrowLeft } from "react-icons/fa";



export default function DeckView() {
    return(
        <Main>
            <Header link={'/decks'} icon={<FaArrowLeft/>}>Biology.</Header>
            <div className="flex min-h-full min-w-full items-center justify-center -mt-20">
                <Card></Card>
            </div>
            
        </Main>

    )
}