"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
    const [viewSearchBar, setViewSearchBar] = useState(false);

    return(
        <section className="flex flex-col items-center top-0 left-0 absolute z-50 bg-neutral-50">
            <div className="w-screen bg-black text-neutral-300 text-center p-2 text-[10px] sm:text-base">
                Catch our latest drop! <span className="text-neutral-50">Exclusive till 10th Oct 2025</span>
            </div>
            <div className="w-96 md:w-[800px] lg:w-[1200px] px-2 md:px-4 lg:px-6 py-4 flex justify-between items-center text-sm sm:text-base">
                <div className="">
                    <Image src={'/vercel.svg'} width={32} height={32} alt="sortaEcommerce" className="bg-black p-1.5 sm:hidden rotate-180"/>
                    <p className="hidden sm:block">sortaEcommerce</p>
                </div>
                <div>
                    <motion.div 
                        className="hidden sm:block"
                        initial={{
                            opacity: 0,
                            y: -5,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                    >
                        <p 
                            className={`button-hover ${viewSearchBar ? 'hidden' : ''}`} 
                            onClick={() => setViewSearchBar(!viewSearchBar)}
                        >
                            search
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: viewSearchBar ? 0 : 1,
                            y: viewSearchBar ? 10 : 0
                        }}
                        animate={{
                            opacity: viewSearchBar ? 1 : 0,
                            y: viewSearchBar ? 0 : 10
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                        className={`flex ${viewSearchBar ? '' : 'sm:hidden'} items-center`}
                    >
                        <input
                            id="search"
                            type="text"
                            className="border border-neutral-300 px-2 py-1 rounded-2xl focus:ring-1 focus:border-neutral-400 focus:ring-neutral-400 outline-none"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 -ml-8 text-neutral-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                    </motion.div>
                    
                </div>
                <div className="flex gap-2 sm:gap-6">
                    <Link href={'/'} className="button-hover">cart</Link>
                    <Link href={'/'} className="button-hover">login</Link>
                </div>
            </div>
        </section>
    )
};
