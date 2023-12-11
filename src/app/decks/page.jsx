"use client"

// Imports
import { useEffect, useLayoutEffect, useState } from "react"
import { useSession } from "next-auth/react"


// Components
import Deck from "@/components/Deck"
import Main from "@/components/structure/Main"
import Header from "@/components/structure/Header"
import FavouriteDecks from "@/components/FavouriteDecks"
import AllDecks from "@/components/AllDecks"
import SearchDecks from "@/components/SearchDecks"

export default function Decks() {

    const {status, data: session} = useSession();
    let decks

    useEffect(() => {
        console.log('use effect')
        async function fetchData() {
            let userID
            try {
                const email = await session?.user?.email
                const response = await fetch(`http://localhost:3000/api/user/${email}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if(response.ok) {
                    console.log('1st response ok')
                    const responseData = await response.json();
                    userID = await responseData.user._id
                    try {
                        const response = await fetch(`http://localhost:3000/api/deck/${await userID}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        if(response.ok) {
                            console.log('2nd response ok')
                            console.log(userID)
                            decks = await response.json()
                        }
                    } catch (error) {
                        console.error('Error:', error)
                    }
                }
                
            } catch (error) {
                console.error('error detected: ', error)
            }




            console.log(await decks)
        }
        fetchData()
    }, [])

    return(
        <Main>
            <Header>Your Decks</Header>

            <FavouriteDecks>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
                <Deck></Deck>
            </FavouriteDecks>

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
      </Main>
    )
}