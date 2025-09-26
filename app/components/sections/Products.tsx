import axios from "axios";
import ProductCard from "../ProductCard";

export interface ProductSchema{
  id : string;
  name : string;
  price : string;
  imageUrl : string
}

async function fetchProducts() : Promise<ProductSchema[]> {
  const response = await axios.get<ProductSchema[]>("http://localhost:3000/products")
  return response.data;
}

export default async function Products() {
    const products : ProductSchema[] = await fetchProducts();

    return(
        <section className="w-screen flex flex-col items-center -mt-26 relative z-40">
            <div className="w-screen bg-neutral-50 p-2 overflow-clip h-9.5">
                FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT *
            </div>
            <div className="w-96 p-4 md:p-6 sm:w-[620px] md:w-[860px] lg:w-[1200px] bg-neutral-50 rounded-lg mt-4 flex flex-wrap">
                <ProductCard 
                    name={products[0].name}
                    price={products[0].price}
                    imageUrl={products[0].imageUrl}
                />
            </div>
        </section> 
    )
};
