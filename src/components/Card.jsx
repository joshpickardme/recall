// Imports
import { motion } from "framer-motion"

export default function DeckOverview() {
    return(
        <motion.div drag="x" dragConstraints={{ left: 0, right: 0 }} className="flex flex-col items-center justify-between bg-white shadow-xl p-3 rounded-lg w-96 h-[500px]">
            <div className="flex min-w-full justify-between">
                <p>Biology</p>
                <p>1/59</p>
            </div>
            
            <p className="text-2xl font-medium text-center">What is the powerhouse of the cell?</p>
            <button className="bg-[var(--purple)] p-3 min-w-full text-white rounded-md font-medium text-lg">Flip Card</button>
        </motion.div>  
    )
}