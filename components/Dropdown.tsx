import Image from "next/image";
import User from "../interfaces/User";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOpenid } from '@fortawesome/free-brands-svg-icons'
import { useState } from "react";

type DropdownProps = {
    children: React.ReactElement[]
}
export const Dropdown = ({children} : DropdownProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    return (
        <div>
            <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)}>Open/Close</button>

            <div className={
                dropdownOpen ? `top-full opacity-100 visible` 
                : `top-[110%] invisible opacity-0 left-0 z-40 mt-2 w-full rounded `}>
                    {children}
                </div>
        </div>
    )
}