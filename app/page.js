import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
        <div className="bg-primary h-screen flex flex-col items-center">
            <header className="flex flex-col justify-center items-center">
                    <Image src={'/refugiologo.gif'} width={100} height={0} alt="logo gif" />
                    <h2 className="text-white font-samsara text-center text-xl">
                        Bem vindo ao
                    </h2>
                    <h1 className="text-secondary font-cenzo text-center text-2xl font-bold">Drinks do park</h1>
            </header>
            <div className="grid grid-cols-1 gap-2 p-2 w-full h-full font-ernestine font-semibold">
                <Link href={'/autorais'}>
                    <div className="bg-[url('/IMG_8336.jpg')] h-full bg-center bg-cover bg-no-repeat flex items-center justify-center">
                        <h2 className="text-3xl text-white">Autorias</h2>
                    </div>
                </Link>
                <Link href={'/autorais'}>
                    <div className="bg-[url('/IMG_8235.jpg')] h-full bg-center bg-cover bg-no-repeat flex items-center justify-center">
                        <h2 className="text-3xl text-white">Clássicos</h2>
                    </div>
                </Link>
                <div className="bg-[url('/drinkmes.jpeg')] bg-center bg-no-repeat bg-cover flex items-center justify-center">
                    <h2 className="text-3xl text-white">Drink do mês</h2>
                </div> 
            </div>
        </div>
  );
}
