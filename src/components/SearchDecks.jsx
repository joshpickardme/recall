export default function SearchDecks({children}) {
    return(
        <div className="flex flex-col p-8 rounded-lg">
            <h1 className="text-[var(--purple)] text-2xl font-bold">Search Decks</h1>
            <p className="text-[var(--purple)]">Seems like you're looking for something specific!</p>
            <div className="flex flex-row mt-6 gap-3 overflow-y-auto sm:flex-wrap">
                {children}
            </div>
            
        </div>
    )
}