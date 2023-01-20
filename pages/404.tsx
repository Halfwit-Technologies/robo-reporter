import Link from 'next/link'

export default function Error404() {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <Link href={"/"}>Home</Link>
        </div>
    )
}