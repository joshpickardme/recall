"use client"

// Imports
import { useEffect, useLayoutEffect, useState } from "react"
import { useSession } from "next-auth/react"

// Icon
import { RxCardStackPlus } from "react-icons/rx";
import { FaPenToSquare } from "react-icons/fa6";


// Components
import Deck from "@/components/Deck"
import Main from "@/components/structure/Main"
import Header from "@/components/structure/Header"
import FavouriteDecks from "@/components/FavouriteDecks"
import AllDecks from "@/components/AllDecks"
import SearchDecks from "@/components/SearchDecks"
import HeaderButton from "@/components/HeaderButton"

export default function Decks() {

    const {status, data: session} = useSession();
    let [decks, setDecks] = useState()
    let [search, setSearch] = useState("")

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
                        const response = await fetch(`http://localhost:3000/api/deck/${userID}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        if(response.ok) {
                            console.log('2nd response ok')
                            console.log(userID)
                            const body = await response.json()
                            setDecks(body)
                            console.log(decks)
                        }
                    } catch (error) {
                        console.error('Error:', error)
                    }
                }
                
            } catch (error) {
                console.error('error detected: ', error)
            }




            
        }
        fetchData()
    }, [])

    return(
        <>
        
        <Main>
            <Header title={"Your Decks"}>
                <HeaderButton icon={<FaPenToSquare className="scale-100" />} text={"Manage Decks"}></HeaderButton>
                <HeaderButton icon={<RxCardStackPlus className="scale-125" />} text={"Create New Deck"}></HeaderButton>
            </Header>

            <FavouriteDecks>
                {decks?.decks.filter(deck => deck.favourite).map(deck => (<Deck key={deck._id} id={deck._id} name={deck.name} colour={deck.colour} favourite={deck.favourite} cards={deck.cards} owner={deck.ownerID} ></Deck>))}
            </FavouriteDecks>

            <AllDecks setSearch={setSearch}>
                {decks?.decks.filter(deck => deck?.name?.toLowerCase().includes(search?.toLowerCase())).map(deck => (<Deck key={deck._id} id={deck._id} name={deck.name} colour={deck.colour} favourite={deck.favourite} cards={deck.cards} owner={deck.ownerID} ></Deck>))}
            </AllDecks>     
      </Main>
      </>
    )
}