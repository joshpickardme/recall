import { FaMagnifyingGlass } from "react-icons/fa6";


export default function Searchbar() {
    return(
        <div className="flex flex-row items-center gap-3 bg-[var(--gray)] max-w-2xl  rounded-full">
            <div className="flex min-h-full items-center bg-[var(--darker-gray)] justify-center w-12 rounded-full">
                <FaMagnifyingGlass className=" scale-125 text-[var(--purple)] z-0 " />
            </div>
            <input type="text" className="bg-[var(--gray)] p-3 w-3/4 focus:outline-none rounded-full" placeholder="search" />
            
        </div>
       
    )
}