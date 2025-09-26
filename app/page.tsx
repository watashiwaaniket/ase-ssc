import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Products from "./components/sections/Products";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
    </>
  ) 
}
