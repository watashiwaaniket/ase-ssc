"use client";
import Image from "next/image";

export interface ProductCardProps{
    name : string;
    price : string;
    imageUrl : string;
    onClick ?: () => void;
}

export default function ProductCard({name, price, imageUrl, onClick} : ProductCardProps) {
    return(
        <div
            className="border border-neutral-300 h-[420px] rounded-xl bg-white"
        >
            <div className="h-[300px] overflow-clip border border-neutral-300 rounded-2xl m-2 flex items-center">
                <Image 
                    src={imageUrl} 
                    width={300} 
                    height={300} 
                    alt={name}
                />
            </div>
            <div className="flex w-[318px] justify-between items-center px-4 pb-2">
                <div>
                    <p className="font-semibold text-lg">{name}</p>
                    <p>₹{price}</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-pink-400 hover:cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <button onClick={() => {alert(`clicked on ${name}`)}} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    </button>

                </div>
            </div>
            
        </div>
    )
};
