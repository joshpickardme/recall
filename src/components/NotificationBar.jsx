import { FaExclamationCircle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";



export default function NotificationBar() {
    return(
        <div className="flex min-w-full items-center justify-between p-3 rounded-md flex-row gap-4 bg-[var(--purple)]">
            <div className="flex items-center gap-4">
                <FaExclamationCircle className="text-white scale-125" />
                <p className="text-white">This is a notification bar - it serves no purpose (yet)</p>
            </div>
            <IoCloseOutline className="text-white scale-150 hover:cursor-pointer"/>


        </div>
    )
}