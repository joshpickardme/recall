"use client";

import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
import DeckOverview from "./Card";

export default function Deck({ id, name, colour, favourite, cards, ownerId }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [cardColor, setCardColor] = useState("");
  const [openCard, setOpenCard] = useState(false);

  const cardLength = [...cards]

  useEffect(() => {
    setCardColor(colour);
    setIsFavorite(favourite); // Simplify setting isFavorite
  }, [colour, favourite]);

    function openCardModal() {
        if(cards.length > 0) {
            setOpenCard(true);
        } else {
            console.log('No cards')
        }
    }

    function closeCardModal() {
        setOpenCard(false)
    }


  return (
    <>
      {openCard && 
      <>
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 60}}
            transition={{duration: 0.3}}
            onClick={closeCardModal} 
            className="left-0 top-0 fixed bg-black bg-opacity-60 min-w-full min-h-screen z-10"
            >
        </motion.div>
        <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.3}}
            className="fixed left-[1100px] top-[430px] z-20">
            <DeckOverview name={name} colour={colour} cards={cards} closeCard={closeCardModal}></DeckOverview>  
            
        </motion.div>
              
      </>
      }

      <motion.div
        onClick={openCardModal}
        whileHover={{ height: 15 }}
        className={`${cardColor} min-w-[10rem] max-w-[10rem] hover:cursor-pointer max-h-[14rem] min-h-[14rem] rounded-lg outline-gray-500 flex flex-col justify-between items-center p-3`}
      >
        <div className="flex min-w-full justify-end">
          {isFavorite ? (
            <FaHeart className="text-white hover:cursor-pointer" />
          ) : (
            <FaRegHeart
              onClick={(e) => {
                e.stopPropagation();
                setIsFavorite(!isFavorite);
              }}
              className="text-white hover:cursor-pointer"
            />
          )}
        </div>
        <div className="min-w-full">
          <h1 className="font-bold text-2xl text-white">{name}</h1>
          <p className="text-white text-md">{cards.length} cards</p>
        </div>
      </motion.div>
    </>
  );
}
