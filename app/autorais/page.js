'use client'

import Header from "../components/header";
import { useState } from "react";

const drinks = [
    { id: 1, name: "Mojito", image: "/IMG_8197.jpg", price: "R$ 20,00", description: "Vodka com infusão em cascas cítricas, Monin de pêssego, purê artesanal de morango, carope de flor de sabugueiro e suco de limão." },
    { id: 2, name: "Caipirinha", image: "/IMG_8235.jpg", price: "R$ 15,00", description: "Vodka com infusão em cascas cítricas, Monin de pêssego, purê artesanal de morango, carope de flor de sabugueiro e suco de limão." },
    { id: 3, name: "Margarita", image: "/IMG_8292.jpg", price: "R$ 25,00", description: "Vodka com infusão em cascas cítricas, Monin de pêssego, purê artesanal de morango, carope de flor de sabugueiro e suco de limão." },
    { id: 4, name: "Piña Colada", image: "/IMG_8336.jpg", price: "R$ 22,00", description: "Vodka com infusão em cascas cítricas, Monin de pêssego, purê artesanal de morango, carope de flor de sabugueiro e suco de limão." },
  ];

export default function Page(){

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextDrink = () => {
        setCurrentIndex((prev) => (prev + 1) % drinks.length);
    };

    const prevDrink = () => {
        setCurrentIndex((prev) => (prev - 1 + drinks.length) % drinks.length);
    };

    const activeDrink = drinks[currentIndex];

    return (
        <>
            <Header />
            <div className="bg-primary h-screen">
                <div className="flex flex-col items-center gap-2 h-full">
                   
                    <div className="relative flex items-center justify-center">
                        <button onClick={prevDrink} className="absolute left-0 p-2 rounded-full z-10">
                        <img
                                
                                src={'/left.png'}
                                alt={'left'}
                                className="w-[50px] h-[50px]"
                            />
                        </button>
                        <div className="flex space-x-2">
                        {drinks.map((drink, index) => {
                            const isActive = index === currentIndex;
                            const isSide = index === (currentIndex + 1) % drinks.length || index === (currentIndex - 1 + drinks.length) % drinks.length;

                            return (
                            <img
                                key={drink.id}
                                src={drink.image}
                                alt={drink.name}
                                className={`transition-all duration-300 ${
                                isActive ? "w-32 h-32 border-2 border-secondary opacity-100" : isSide ? "w-32 h-32 opacity-50" : "hidden"
                                }`}
                            />
                            );
                        })}
                        </div>
                        <button onClick={nextDrink} className="absolute right-0 p-2 rounded-full">
                        <img
                                
                                src={'/rigth.png'}
                                alt={'left'}
                                className="w-[50px] h-[50px]"
                            />
                        </button>
                    </div>

                    {/* Active Drink Info */}
                    <div className="p-2 h-full w-full bg-center bg-no-repeat bg-cover flex flex-col items center justify-between" style={{backgroundImage: `url(${activeDrink.image})`}}>
                        <h2 className="text-secondary font-cenzo font-extrabold text-3xl text-center">{activeDrink.name}</h2>
                        <div>
                            <p className="text-white font-cenzo text-3xl font-extrabold">{activeDrink.price}</p>
                            <p className="text-white font-ernestine text-end">{activeDrink.description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}