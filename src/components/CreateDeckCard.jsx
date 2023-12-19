"use client";

import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
import DeckOverview from "./Card";

export default function CreateDeckCard() {



  return (
    <>
      <motion.div
        className={`bg-cyan-500 min-w-[15rem] max-w-[15rem] hover:cursor-pointer max-h-[21rem] min-h-[21rem] rounded-lg outline-gray-500 flex flex-col justify-between items-center p-3`}
      >
        <div className="flex min-w-full justify-end">
        <FaHeart className="text-white hover:cursor-pointer scale-150" />
        </div>
        <div className="min-w-full">
          <input type="text" className="bg-transparent max-w-full w-full text-white font-bold text-2xl hover:cursor-pointer outline-none" />
          <p className="text-white text-2xl">0 cards</p>
        </div>
      </motion.div>
    </>
  );
}
