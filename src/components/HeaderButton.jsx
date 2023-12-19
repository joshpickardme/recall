export default function HeaderButton({icon, text}) {
    return(
        <button className="flex flex-row gap-3 items-center text-white font-bold rounded-lg text-xl py-3 px-6 bg-cyan-600 outline-cyan-600 ">{icon}{text}</button>
    )
}