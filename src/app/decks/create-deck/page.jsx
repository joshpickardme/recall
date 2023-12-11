"use client"

// Imports
import { useState } from "react"

// Components
import Main from "@/components/structure/Main"
import Header from "@/components/structure/Header"

export default function CreateDeck() {

    const [deckName, setDeckName] = useState('')
    const [deckColour, setDeckColour] = useState('')
    const [favourite, setFavourite] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log('clicked')
    }


    return(
        <Main>
            <Header>Create New Deck.</Header>
            <div className="flex flex-col gap-2 w-full sm:w-96">
                <form className="flex flex-col gap-2">
                    <label htmlFor="">Deck name</label>
                    <input onChange={(e) => setDeckName(e.target.value)} className="outline outline-2 bg-transparent w-full p-2 rounded-sm" placeholder="Name" type="text" value={deckName} />
                    <label htmlFor="">Deck colour</label>
                    <select onChange={(e) => setDeckColour(e.target.value)} className="outline outline-2 bg-transparent w-full p-2 rounded-sm" type="dropdown" value={deckColour}>
                        <option className="" value="blue">Purple</option>
                        <option value="cyan">Cyan</option>
                        <option value="pink">Pink</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                    <label htmlFor="">Favourite</label>
                    <select onChange={(e) => setFavourite(e.target.value)} className="outline outline-2 bg-transparent w-full p-2 rounded-sm" type="dropdown" value={favourite}>
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                    <button onClick={handleSubmit} className="text-left max-w-fit rounded-md">Submit</button>
                </form>
            </div>
      </Main>
    )
}