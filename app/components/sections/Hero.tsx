import Image from "next/image";
import { Button } from "../Button";

export default function Hero() {
    return(
        <section 
            className="h-[480px] sm:h-[780px] overflow-clip sm:bg-[url(/banner.jpg)] bg-[url(/mobile-banner.jpg)] flex justify-center w-screen relative z-10" 
            style={{backgroundSize: "cover", backgroundPosition: "center"}}
        >
            <div className="w-96 px-4 md:px-6 sm:w-[620px] md:w-[860px] lg:w-[1200px] text-white absolute pt-12 sm:pt-0 sm:bottom-0 h-96">
                <div className="flex flex-col gap-1.5">
                    <h1 className="text-4xl md:text-7xl tracking-tight font-bold flex items-center">
                        <Image src={"/vercel.svg"} alt="icon" width={64} height={64} className="rotate-180 size-8 md:size-[64px]"/>
                        <span className="font-normal tracking-tighter italic -ml-3 sm:-ml-6">sorta</span>ECOMMERCE
                    </h1>
                    <p className="w80 sm:w-[640px]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore iste amet illo id ad quae, rerum assumenda eos molestias. Aut dolor at unde eaque repudiandae tempore corporis magni.
                    </p>
                </div>
                <div className="flex gap-4 pt-10">
                    <Button label="Shop Now" type="primary"/>
                    <Button label="Learn More" type="secondary"/>
                </div>
            </div>
        </section>
    )
};
