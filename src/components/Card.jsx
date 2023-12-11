// Imports
import { motion, useAnimation  } from "framer-motion"
import { useState } from "react"

// Icons
import { RxCrossCircled } from "react-icons/rx";
import { RxCheckCircled } from "react-icons/rx";


export default function DeckOverview() {

    const [flipped, setFlipped] = useState(false)
    const flashcardControl = useAnimation();

    function handleFlip() {
        setFlipped(true)
        flashcardControl.start({ rotateY: 180})
    }

    return(
        <motion.div initial={{}} animate={flashcardControl} transition={{duration: 0.4}} className="flex flex-col items-center justify-between bg-white shadow-xl p-3 rounded-lg w-96 h-[500px]">
            <motion.div initial={{}} animate={flashcardControl} transition={{duration: 0.4}} className="flex min-w-full justify-between">
                <p className="font-bold text-xl">Biology</p>
                <p>59</p>
            </motion.div>
            
            <motion.p initial={{}} animate={flashcardControl} transition={{duration: 0.4}} className="text-2xl font-medium text-center">What is the powerhouse of the cell?</motion.p>
            {!flipped && <button onClick={handleFlip} className="bg-[var(--purple)] p-3 min-w-full text-white rounded-md font-medium text-lg">Flip Card</button>}
            {flipped && <div  className="flex min-w-full justify-evenly">
            <button className="bg-green-500 p-3 min-w-[100px]  flex justify-center items-center text-white rounded-md font-medium text-lg"><RxCheckCircled className="text-white scale-150  transform -scale-x-1" /></button>   
            <button className="bg-red-500 p-3 min-w-[100px]  flex justify-center items-center text-white rounded-md font-medium text-lg"><RxCrossCircled className="text-white scale-150" /></button>  
            
            </div>}
            
        </motion.div>  
    )
}