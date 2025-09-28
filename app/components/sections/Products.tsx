"use client";
import axios from "axios";
import ProductCard from "../ProductCard";
import { ProductSchema } from "@/app/utils/interfaces";
import { useEffect, useState } from "react";

async function fetchProducts() : Promise<ProductSchema[]> {
  const response = await axios.get<ProductSchema[]>("/products")
  return response.data;
}

export default function Products() {
    const [products, setProducts] = useState<ProductSchema[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    return(
        <section className="w-screen flex flex-col items-center -mt-24 relative z-40 py-2">
            <div className="w-screen bg-neutral-50 p-2 overflow-clip h-9.5">
                FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT * FLASH SALE * 10TH OCT *
            </div>
            <div className="w-96 p-4 md:p-6 sm:w-[620px] md:w-[860px] lg:w-[1200px] bg-neutral-50 rounded-xl mt-6">
                {loading ? (
                    <div className="flex justify-center items-center py-8">
                        <p>Loading products...</p>
                    </div>
                ) : (
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-x-12 md:gap-y-8 py-8">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                imageUrl={product.imageUrl}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section> 
    )
};
