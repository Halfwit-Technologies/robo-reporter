import Image from "next/image";
import User from "../interfaces/User";

export const AboutCard = ({ name, image }: User) => {
    return (
        <div className="card border border-slate-600 rounded-md container m-auto max-w-md content-center justify-center items-center flex">
            <Image src={image} alt="author image" className="rounded-full self-start" width="50" height="50" />
            <p>{name}</p>
        </div>
    )
}