"use client"

export default function AllDecks({children, setSearch}) {
    return(
        <div className="flex flex-col p-8 rounded-lg">
            <div className="flex flex-row justify-between">
                <h1 className="text-[var(--purple)] text-2xl font-bold">All Decks</h1>
                <input onChange={(e) => setSearch(e.currentTarget.value)} type="text" className="p-2 bg-[var(--gray)] rounded-lg focus:outline-none w-40" placeholder="Search decks" />
            </div>

            <p className="text-[var(--purple)]">Here you can see all your decks. Too many? Search.</p>
            <div className="flex flex-row mt-6 gap-3 overflow-y-auto sm:flex-wrap">
                {children}
            </div>
            
        </div>
    )
}