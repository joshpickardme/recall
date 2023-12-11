"use client"

// Imports
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

// Components
import Main from "@/components/structure/Main"
import Header from "@/components/structure/Header"

export default function CreateDeck() {

    const [deckName, setDeckName] = useState('unnamed')
    const [deckColour, setDeckColour] = useState('purple')
    const [favourite, setFavourite] = useState('false')
    const {status, data: session} = useSession();

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
                body: JSON.stringify({name: deckName, colour: deckColour, favourite: favourite, ownerID: await userID})
            })

            if(response.ok) {
                // request successful
                const responseData = await response.json();
                console.log(responseData)
            } else {
                const errorData = await response.json();
                console.error('failed to make POST request!!!', errorData);
            }
        }  catch (error) {
            console.error('Error while making POST request', error)
        }   
    }


    return(
        <Main>
            <Header>Create New Deck.</Header>
            <div className="flex flex-col gap-2 w-full sm:w-96">
                <form className="flex flex-col gap-2">
                    <label htmlFor="">Deck name</label>
                    <input onChange={(e) => setDeckName(e.target.value)} className="outline outline-2 bg-transparent w-full p-2 rounded-sm" placeholder="Name" type="text" value={deckName} />
                    <label htmlFor="">Deck colour</label>
                    <select onChange={(e) => setDeckColour(e.target.value)}  className="outline outline-2 bg-transparent w-full p-2 rounded-sm" type="dropdown" value={deckColour}>
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