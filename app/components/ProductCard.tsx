import Image from "next/image";

export interface ProductCardProps{
    name : string;
    price : string;
    imageUrl : string;
}

export default function ProductCard({name, price, imageUrl} : ProductCardProps) {
    return(
        <div
            className="border border-neutral-300 h-[420px] rounded-xl bg-neutral-100"
        >
            <Image 
                src={imageUrl} 
                width={300} 
                height={300} 
                alt="anc"
                className="rounded-2xl m-2 border border-neutral-300" 
            />
            <div className="flex w-[318px] justify-between items-center px-4 pb-2">
                <div>
                    <p className="font-semibold text-lg">{name}</p>
                    <p>₹{price}</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-pink-400 hover:cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
            </div>
            
        </div>
    )
};
