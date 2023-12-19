"use client"

// Imports
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

// Components
import Main from "@/components/structure/Main"
import Header from "@/components/structure/Header"
import CreateDeckCard from "@/components/CreateDeckCard"

export default function CreateDeck() {

    const [deckName, setDeckName] = useState('click to rename')
    const [deckColour, setDeckColour] = useState('bg-blue-500')
    const [favourite, setFavourite] = useState(false)
    const {status, data: session} = useSession();


    const [frontCard, setFrontCard] = useState("")
    const [backCard, setBackCard] = useState("")
    const [cards, setCards] = useState([])
    function addCard() {
        if(!frontCard || !backCard) {
            console.log('Data Missing')
        } else {
            setCards(prevCards => [...prevCards, {front: frontCard, back: backCard}]);
            setFrontCard("")
            setBackCard("")
        }
    }

    function clearInputs() {
        setDeckName('click to rename')
        setDeckColour('bg-blue-500')
        setCards([])
        setFavourite(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('clicked')
        let userID

        try {

            try {
                const email = await session?.user?.email
                const response = await fetch(`http://localhost:3000/api/user/${email}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if(response.ok) {
                    const responseData = await response.json();
                    userID = responseData.user._id
                }
                
            } catch (error) {
                console.error('error detected: ', error)
            }





            const response = await fetch('http://localhost:3000/api/deck', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: deckName, colour: deckColour, favourite: favourite, cards: cards, ownerID: await userID})
            })

            if(response.ok) {
                // request successful
                const responseData = await response.json();
                clearInputs()
                console.log(responseData)
            } else {
                const errorData = await response.json();
                console.error('failed to make POST request!!!', errorData);
            }
        }  catch (error) {
            console.error('Error while making POST request', error)
        }   
    }


    return (
        <Main>
          <Header title={"Create New Deck"}></Header>
          <div className="flex flex-row gap-36">
            <div className="flex flex-col justify-center gap-3">
                <div className={`${deckColour} min-w-[15rem] max-w-[15rem] hover:cursor-pointer max-h-[21rem] min-h-[21rem] rounded-lg outline-gray-500 flex flex-col justify-between items-center p-3`}>
                <div className="flex min-w-full justify-end">
                    {favourite ? (
                    <FaHeart onClick={() => setFavourite(!favourite)} className="text-white hover:cursor-pointer scale-150" />
                    ) : (
                    <FaRegHeart onClick={() => setFavourite(!favourite)} className="text-white hover:cursor-pointer scale-150" />
                    )}
                </div>
                <div className="min-w-full">
                    <input type="text" onChange={(e) => setDeckName(e.target.value)} value={deckName} className="bg-transparent max-w-full w-full text-white font-bold text-2xl hover:cursor-pointer outline-none" />
                    <p className="text-white text-2xl">{cards.length} cards</p>
                </div>
                </div>
                <div className="flex gap-[4px] min-w-[15rem] max-w-[15rem] ">
                <div onClick={() => setDeckColour('bg-blue-500')} className="w-[59px] h-[59px] bg-blue-500 rounded-md hover:cursor-pointer"></div>
                <div onClick={() => setDeckColour('bg-pink-400')} className="w-[59px] h-[59px] bg-pink-400 rounded-md hover:cursor-pointer"></div>
                <div onClick={() => setDeckColour('bg-cyan-600')} className="w-[59px] h-[59px] bg-cyan-600 rounded-md hover:cursor-pointer"></div>
                <div onClick={() => setDeckColour('bg-yellow-500')} className="w-[59px] h-[59px] bg-yellow-500 rounded-md hover:cursor-pointer"></div>
                </div>
                <div className="flex gap-[4px] min-w-[15rem] max-w-[15rem] ">
                <div onClick={() => setDeckColour('bg-red-500')} className="w-[59px] h-[59px] bg-red-500 rounded-md hover:cursor-pointer "></div>
                <div onClick={() => setDeckColour('bg-gray-500')} className="w-[59px] h-[59px] bg-gray-500 rounded-md hover:cursor-pointer"></div>
                <div onClick={() => setDeckColour('bg-orange-600')} className="w-[59px] h-[59px] bg-orange-600 rounded-md hover:cursor-pointer"></div>
                <div onClick={() => setDeckColour('bg-purple-500')} className="w-[59px] h-[59px] bg-purple-500 rounded-md hover:cursor-pointer"></div>
                </div>
                <button onClick={handleSubmit} className={`${deckColour} text-white font-bold p-3 min-w-[15rem] max-w-[15rem] rounded-md`}>Submit</button>
            </div>
            <div className="flex flex-col  w-64">
                <h1 className="font-semibold text-2xl">Add Cards</h1>
                <div className="flex flex-col mt-6 gap-3 ">
                    <input onChange={(e) => setFrontCard(e.target.value)} value={frontCard} className=" outline outline-1 outline-black p-2 bg-white" type="text" placeholder="Front of card" />
                    <input onChange={(e) => setBackCard(e.target.value)} value={backCard} className=" outline outline-1 outline-black p-2 bg-white" type="text" placeholder="Back of card" />
                    <button onClick={addCard} className="text-left">Submit</button>
                </div>
                <h1 className="font-semibold text-2xl mt-12">Current Cards</h1>
                {cards.map((card, index) => {
                    <p className="text-black">Front: {card.front}</p>
                })}
            </div>
            
          </div>
        </Main>
)}