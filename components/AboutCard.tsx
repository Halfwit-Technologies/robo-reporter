import Image from "next/image";
import User from "../interfaces/User";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOpenid } from '@fortawesome/free-brands-svg-icons'

export const AboutCard = ({ name, image }: User, isAI: boolean) => {
    return (
        <div className="card border border-slate-600 rounded-md container m-auto max-w-md content-center justify-center items-center flex">
            <Image src={image} alt="author image" className="rounded-full self-start" width="50" height="50" />
            <p className="dark:text-white pl-4">{name}</p>
            <br />
            {/* {isAI ? <FontAwesomeIcon icon={faOpenid} size='lg'></FontAwesomeIcon> : null} */}
        </div>
    )
}