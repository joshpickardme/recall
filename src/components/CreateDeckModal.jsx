import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";


export default function CreateDeckModal({toggleModal}) {

    const [deckName, setDeckName] = useState("")
    const [deckDescription, setDeckDescription] = useState("")

    function handleSubmit(e) {
        e.preventDefault
        console.log('clicked')
        console.log(deckName)
        console.log(deckDescription)
        toggleModal()
    }


    return(
        <div className="bg-black bg-opacity-40 absolute top-0 left-0 min-h-screen min-w-full z-0">
            <div className="flex min-w-full min-h-screen justify-center items-center z-10">
                <div className="w-96 flex flex-col gap-4 bg-slate-500 p-3 rounded-md shadow-lg">
                    <div className="flex flex-row justify-between items-center min-w-full">
                        <h1 className="text-white  text-xl font-medium">Add New Deck</h1>
                        <IoMdClose onClick={() => toggleModal(false)} className="hover:cursor-pointer relative text-white scale-150" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <p className="text-slate-800 text-md mb-1">Deck name</p>
                            <input onChange={(e) => setDeckName(e.target.value)} className="p-1 rounded-sm bg-transparent outline outline-2 outline-slate-800 placeholder-slate-800" value={deckName} placeholder="Name" type="text" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-slate-800 text-md mb-1">Deck description</p>
                            <textarea onChange={(e) => setDeckDescription(e.target.value)} className="p-1 rounded-sm bg-transparent outline outline-2 outline-slate-800 placeholder-slate-800 resize-none" rows='2' value={deckDescription} placeholder="Description" type="" />
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="text-left px-3 py-1 bg-slate-800 text-white max-w-fit rounded-md">Add Deck</button>
                </div>
            </div>
        </div>

    )
}