"use client"

// Imports
import CreateDeckModal from "./CreateDeckModal"
import { useState } from "react"

export default function CreateDeck() {
    const [showModal, setShowModal] = useState(false)

    function toggleModal() {
        setShowModal(!showModal)
    }


    return(
        <>
        {showModal && <CreateDeckModal toggleModal={toggleModal}></CreateDeckModal>}
        
        <div onClick={() => setShowModal(!showModal)} className="w-56 h-72 rounded-md outline-2 outline-dashed outline-gray-500 flex flex-col items-center justify-center hover:cursor-pointer">
            <h1 className="font-medium text-xl">Create New Deck</h1>
        </div>
        </>
    )
}