"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [viewSearchBar, setViewSearchBar] = useState(false);

    return(
        <section className="flex flex-col items-center">
            <div className="w-screen bg-black text-neutral-300 text-center p-2 text-[10px] sm:text-base">
                Catch our latest drop! <span className="text-neutral-50">Exclusive till 10th Oct 2025</span>
            </div>
            <div className="w-96 md:w-[1400px] px-2 md:px-4 lg:px-6 py-4 flex justify-between items-center text-sm sm:text-base">
                <div className="">
                    <Image src={'/vercel.svg'} width={32} height={32} alt="sortaEcommerce" className="bg-black p-1.5 sm:hidden"/>
                    <p className="hidden sm:block">sortaEcommerce</p>
                </div>
                <div>
                    <div className="hidden sm:block">
                        <p 
                            className={`button-hover ${viewSearchBar ? 'hidden' : ''}`} 
                            onClick={() => setViewSearchBar(!viewSearchBar)}
                        >
                            search
                        </p>
                    </div>
                    <div className={`flex ${viewSearchBar ? '' : 'sm:hidden'}`}>
                        <input
                            id="search"
                            type="text"
                            className="border border-neutral-300 px-2 py-1 rounded-2xl focus:ring-1 focus:border-neutral-400 focus:ring-neutral-400 outline-none"
                        />

                    </div>
                    
                </div>
                <div className="flex gap-2 sm:gap-6">
                    <Link href={'/'} className="button-hover">cart</Link>
                    <Link href={'/'} className="button-hover">login</Link>
                </div>
            </div>
        </section>
    )
};
