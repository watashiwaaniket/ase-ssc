import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <section className="w-screen mt-4 bg-white h-64 flex flex-col justify-center items-center">
            <div>
                sortaEcommerce | follow the hype
            </div>
            <div className="flex gap-1 p-2">
                .
                <Link href={'#'}><Image src="/wa.svg" height={32} width={32} alt="wa" className="size-8"/></Link> .
                <Link href={'#'}><Image src="/facebook.svg" height={32} width={32} alt="fb" className="size-8"/></Link> .
                <Link href={'#'}><Image src="/youtube.svg" height={32} width={32} alt="yt" className="size-8"/></Link> .
            </div>
            <div className="flex items-center gap-2">
                <Image src="/vercel.svg" alt="sorta" height={16} width={16} className="bg-black rotate-180 size-4"/> <p>&copy; 2025</p>
            </div>
        </section>
    )
};
