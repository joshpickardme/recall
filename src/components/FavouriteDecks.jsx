export default function FavouriteDecks({children}) {
    return(
        <div className="flex flex-col bg-white p-8 shadow-sm rounded-lg ">
            <h1 className="text-[var(--purple)] text-2xl font-bold sm:text-left">Favourite Decks</h1>
            <p className="text-[var(--purple)] sm:text-left">Hit the heart icon to highlight your favourite decks!</p>
            <div className="flex flex-row mt-6 gap-3 overflow-y-auto">
                {children}
            </div>
        </div>
    )
}