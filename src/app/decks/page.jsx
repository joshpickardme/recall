"use client"

// Imports
import { useEffect, useLayoutEffect, useState } from "react"

// Components
import Deck from "@/components/Deck"
import Main from "@/components/structure/Main"
import Header from "@/components/structure/Header"
import FavouriteDecks from "@/components/FavouriteDecks"
import AllDecks from "@/components/AllDecks"
import SearchDecks from "@/components/SearchDecks"

export default function Decks() {

    const [search, setSearch] = useState("")

    useEffect(() => {
        console.log('test')
    }, [])

    return(
        <Main>
            <Header>Your Decks.</Header>

            {!search &&
            <FavouriteDecks>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
            </FavouriteDecks>
            }
            {!search &&
            <AllDecks>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
            </AllDecks>     
            }
            {search && 
            <SearchDecks>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
            </SearchDecks>
            
            
            
            }





      </Main>
    )
}