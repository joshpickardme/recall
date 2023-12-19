// Imports
import { motion, useAnimation  } from "framer-motion"
import { useEffect, useState } from "react"

// Icons
import { RxCrossCircled } from "react-icons/rx";
import { RxCheckCircled } from "react-icons/rx";


export default function DeckOverview({name, colour, cards, closeCard}) {

    const [flipped, setFlipped] = useState(false)
    const flashcardControl = useAnimation();

    const [started, setStarted] = useState(false)
    const [ended, setEnded] = useState(false)

    const [currentCard, setCurrentCard] = useState({front: "this", back: "that"})
    const [deckCards, setDeckCards] = useState([])

    function loadCards() {
        const arr = []
        for(let i = 0; i < cards.length; i++) {
            arr.push(cards[i])
        }
        setDeckCards(arr)
    }

    function handleFlip() {
        setFlipped(true)
        flashcardControl.start({ rotateY: 180})
    }
    
    function handleStart() {
        console.log(deckCards)
        getCard()
        setStarted(true)
    }

    function handleEnd() {
        // Does something once user has finished all cards in the deck.
        flashcardControl.start({ rotateY: 360})
        setStarted(false)
        setEnded(true)
    }

    
    function getCard() {
        console.log(`Remaining Cards: ${deckCards.length}`)

        if(deckCards.length < 1) {
            handleEnd()
        } else {
            const randomNumber = Math.floor(Math.random() * deckCards.length)
            const newCard = deckCards[randomNumber]
            console.log(`New Card: ${newCard.index}`)
            setCurrentCard({front: newCard.front, back: newCard.back, index: randomNumber})
        }


    }

    function handleCorrect() {
        console.log('Correct')
        deckCards.splice(currentCard.index, 1)
        console.log(`Remaining Cards: ${deckCards.length}`)
        flashcardControl.start({ rotateY: 360})
        setFlipped(false)
        getCard()
    }

    function handleWrong() {
        console.log('Wrong')
        flashcardControl.start({ rotateY: 360})
        setFlipped(false)
        getCard()
    }

    useEffect(() => {
        console.log('effect')
        loadCards()
    }, [])






    if(started) {
        return(
            <motion.div drag={true}    dragConstraints={{
                top: -150,
                left: -150,
                right: 150,
                bottom: 150,
              }} initial={{}} animate={flashcardControl} transition={{duration: 0.4}}  id="deck" className="flex flex-col items-center justify-between bg-white shadow-xl p-3 rounded-lg w-96 h-[500px] z-50">
                <motion.div initial={{}} animate={flashcardControl} transition={{duration: 0.4}} className="flex min-w-full justify-between">
                    <p className="font-bold text-xl">{name}</p>
                    <p>{deckCards.length} Remaining</p>
                </motion.div>
                
                <motion.p initial={{}} animate={flashcardControl} transition={{duration: 0.4}} className="text-2xl font-medium text-center">{flipped ? currentCard.back : currentCard.front }</motion.p>
                {!flipped && <button onClick={handleFlip} className={`${colour} p-3 min-w-full text-white rounded-md font-medium text-lg`}>Flip Card</button>}
                {flipped && <div  className="flex min-w-full justify-evenly">
                <button onClick={handleCorrect} className="bg-green-500 p-3 min-w-[100px]  flex justify-center items-center text-white rounded-md font-medium text-lg"><RxCheckCircled className="text-white scale-150  transform -scale-x-1" /></button>   
                <button onClick={handleWrong} className="bg-red-500 p-3 min-w-[100px]  flex justify-center items-center text-white rounded-md font-medium text-lg"><RxCrossCircled className="text-white scale-150" /></button>  
                </div>}
            </motion.div>  
        )
    }

    if(!started && !ended) {
        return(
            <motion.div drag={true}    dragConstraints={{
                top: -150,
                left: -150,
                right: 150,
                bottom: 150,
              }} initial={{}} animate={flashcardControl} transition={{duration: 0.4}}  id="deck" className="flex flex-col items-center justify-between bg-white shadow-xl p-3 rounded-lg w-96 h-[500px] z-50">
                <motion.div initial={{}} animate={flashcardControl} transition={{duration: 0.4}} className="flex min-w-full justify-between">
                    <p className="font-bold text-xl">{name}</p>
                    <p>{deckCards.length} Remaining</p>
                </motion.div>
                
                <motion.p initial={{}} animate={flashcardControl} transition={{duration: 0.4}} className="text-2xl font-medium text-center">Ready to start?</motion.p>
                {!flipped && <button onClick={handleStart} className={`${colour} p-3 min-w-full text-white rounded-md font-medium text-lg`}>Start</button>}
                {flipped && <div  className="flex min-w-full justify-evenly">
                <button className="bg-green-500 p-3 min-w-[100px]  flex justify-center items-center text-white rounded-md font-medium text-lg"><RxCheckCircled className="text-white scale-150  transform -scale-x-1" /></button>   
                <button className="bg-red-500 p-3 min-w-[100px]  flex justify-center items-center text-white rounded-md font-medium text-lg"><RxCrossCircled className="text-white scale-150" /></button>  
                </div>}
            </motion.div> 
        )
    } else if(!started && ended) {
        return (
            <motion.div drag={true}    dragConstraints={{
                top: -150,
                left: -150,
                right: 150,
                bottom: 150,
              }} initial={{}} animate={flashcardControl} transition={{duration: 0.4}}  id="deck" className="flex flex-col items-center justify-between bg-white shadow-xl p-3 rounded-lg w-96 h-[500px] z-50">
                <motion.div initial={{}} animate={flashcardControl} transition={{duration: 0.4}} className="flex min-w-full justify-between">
                    <p className="font-bold text-xl">{name}</p>
                    <p>{deckCards.length} Remaining</p>
                </motion.div>
                
                <motion.p initial={{}} animate={flashcardControl} transition={{duration: 0.4}} className="text-2xl font-medium text-center">You have finished this deck.</motion.p>
                {!flipped && <button onClick={closeCard} className={`${colour} p-3 min-w-full text-white rounded-md font-medium text-lg`}>Close Deck</button>}
            </motion.div>
        )
    }


}