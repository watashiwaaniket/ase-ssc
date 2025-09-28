import Link from "next/link";

export default function Footer() {
    return(
        <section className="w-screen mt-4 bg-white h-64 flex flex-col justify-center items-center">
            <div>
                sortaEcommerce | follow the hype
            </div>
            <div className="flex gap-1 p-2">
                .
                <Link href={'#'}><img src="/wa.svg" alt="wa" className="size-8"/></Link> .
                <Link href={'#'}><img src="/facebook.svg" alt="fb" className="size-8"/></Link> .
                <Link href={'#'}><img src="/youtube.svg" alt="yt" className="size-8"/></Link> .
            </div>
            <div className="flex items-center gap-2">
                <img src="/vercel.svg" alt="sorta" className="bg-black rotate-180 size-4"/> <p>&copy; 2025</p>
            </div>
        </section>
    )
};
