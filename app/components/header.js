import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return (
        <header className="bg-primary flex justify-around items-center p-2">
            <h1 className="text-white font-cenzo font-bold text-xl">Drinks autorais</h1>
            <Link href={'/'}>
                <Image src={'/refugiologo.gif'} width={50} height={0} alt="logo refugio" />
            </Link>
        </header>
    )
}