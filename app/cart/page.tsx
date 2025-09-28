"use client";
import axios from "axios";
import { CartItem, ProductSchema } from "../utils/interfaces"
import { useEffect, useState } from "react";
import Image from "next/image";

async function fetchProducts() : Promise<ProductSchema[]> {
  const response = await axios.get<ProductSchema[]>("http://localhost:3000/products")
  return response.data;
}

export default function page() {
    const [products, setProducts] = useState<ProductSchema[]>([]);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        fetchProducts().then(
            (data) => setProducts(data)
        ).catch(
            (error) => console.error("Error fetching products: ", error)
        )

        const store = localStorage.getItem("cart");
        if(store){
            const parseStore = JSON.parse(store);
            setCartItems(parseStore);
        }
    }, [])

    useEffect(() => {
        const cartWithProducts = cartItems
        .map((item) => {
            const product = products.find((p) => p.id === item.id);
            if (!product) {
            return null;
            }
            return {
            id: product.id,
            name: product.name,
            quantity: item.quantity,
            imageUrl: product.imageUrl,
            price: product.price,
            };
        })
        .filter((item) => item !== null);

        const total = cartWithProducts.reduce((sum, item) => {
        const price = parseFloat(item.price);
        return sum + (isNaN(price) ? 0 : price * item.quantity);
        }, 0);

        setTotalCost(total);
    }, [cartItems, products]);

    const handleQuantityChange = (id: string, newQuantity: number) => {
        const updatedCart = cartItems.map( (item) => item.id === id ? {
            ...item, quantity: newQuantity
        } : item );

        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    const cartWithProducts = cartItems.map(
        (item) => {
            const product = products.find( (p) => p.id === item.id );
            if(!product){
                return null;
            }
            return {
                id: product.id,
                name: product.name,
                quantity: item.quantity,
                imageUrl: product.imageUrl,
                price: product.price
            }
        }
    ).filter((item) => item !== null);

    return(
        <section className="bg-neutral-50 w-screen h-screen flex flex-col items-center">
            <h1 className="bg-neutral-950 text-neutral-50 w-screen text-center p-4 font-medium">
                Cart
            </h1>
            <div className="p-4">
                {cartWithProducts.length > 0 ? (
                    <ul className="flex flex-col gap-1.5 w-80 md:w-[680px]">
                    {cartWithProducts.map((item) => (
                        <li key={item.id} className="bg-white border border-neutral-300 rounded-sm flex gap-2 md:gap-4 justify-between">
                            <div className="flex gap-2 md:gap-4">
                                <Image
                                    src={item.imageUrl}
                                    height={100}
                                    width={100}
                                    alt={item.name}
                                    className="p-2 rounded-2xl"
                                />
                                <div className="p-2">
                                    <h2 className="text-black font-medium">
                                        {item.name}
                                    </h2>
                                    <p>Quantity: 
                                        <input 
                                            type="number" 
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                            min="0"
                                            className="w-16 p-1 border rounded border-neutral-400"
                                        />
                                    </p>
                                    <p>
                                        Price: ${parseFloat(item.price) * item.quantity}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
            <div>
                Total : {totalCost}
            </div>
        </section>
    )
};
