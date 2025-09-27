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
        <section className="w-screen flex flex-col items-center -mt-24 relative z-40 py-2">
            <div className="w-screen bg-neutral-50 p-2 overflow-clip h-9.5">
                FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT *
            </div>
            <div className="w-96 p-4 md:p-6 sm:w-[620px] md:w-[860px] lg:w-[1200px] bg-neutral-50 rounded-xl mt-6">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-x-12 md:gap-y-8 py-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section> 
    )
};
