"use client"

// Imports
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { motion } from "framer-motion";


export default function Deck() {

    const [isFavorite, setIsFavorite] = useState(false)


    return(
        <motion.div whileHover={{height: 15}} className="bg-[var(--yellow)] min-w-[10rem] max-w-[10rem] hover:cursor-pointer max-h-[14rem] min-h-[14rem] rounded-lg outline-gray-500 flex flex-col justify-between items-center p-3">
            <div className="flex min-w-full justify-end">
                {isFavorite ? <FaHeart onClick={() => setIsFavorite(!isFavorite)} className="text-white hover:cursor-pointer" />  : <FaRegHeart onClick={() => setIsFavorite(!isFavorite)} className="text-white hover:cursor-pointer" /> }
            </div>
            <div className="min-w-full">
                <h1 className="font-bold text-2xl text-white">Biology</h1>
                <p className="text-white text-md">312 cards</p>
            </div>

        </motion.div>
    )
}