export default function Footer() {
    return(
        <section className="w-screen mt-4 bg-white h-64 flex flex-col justify-center items-center">
            <div>
                sortaEcommerce | follow the hype
            </div>
            <div>
                socials
            </div>
            <div className="flex items-center gap-2">
                <p>&copy; 2025</p> <img src="/vercel.svg" alt="sorta" className="bg-black rotate-180 size-6"/>
            </div>
        </section>
    )
};
