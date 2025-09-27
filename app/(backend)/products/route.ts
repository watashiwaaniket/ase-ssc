import { CartItem, ProductSchema } from "@/app/utils/interfaces";
import { error } from "console";

const product : ProductSchema[] = [
        {
            id : "1",
            name : "ANC Wireless Earbuds",
            price : "5999",
            imageUrl : "https://littlewish.in/wp-content/uploads/2025/05/Black-Buds-3.png"
        },{
            id : "2",
            name : "Aqua EDP (20ml)",
            price : "1799",
            imageUrl : "/perfume.webp"
        },{
            id : "3",
            name : "Headphones ANC",
            price : "28000",
            imageUrl : "/WH1000XM5S.webp"
        },{
            id : "4",
            name : "Aroma Essential Oil Diffuser",
            price : "2100",
            imageUrl : "/oilDiffuser.jpg"
        },{
            id : "5",
            name : "Table Lamp",
            price : "1399",
            imageUrl : "/tableLamp.jpg"
        },{
            id : "6",
            name : "Organic Cotton Tshirt",
            price : "699",
            imageUrl : "/whiteT.jpg"
        },{
            id : "7",
            name : "Chinos",
            price : "2300",
            imageUrl : "/chinos.webp"
        },{
            id : "8",
            name : "Biker Glove",
            price : "2400",
            imageUrl : "/alpinestarGloves.webp"
        },{
            id : "9",
            name : "Motosport Carbon Fiber Helmet",
            price : "72000",
            imageUrl : "/alpinestarHelmet.webp"
        },
]

export async function GET() {
    return Response.json(product)
}

export async function POST(
    req : Request
){
    try{
        const cart : CartItem[] = await req.json();

        if (cart.length == 0){
            return Response.json(
                { message: "Cart is empty" },
                { status: 400 }
            )
        }

        for (const item of cart){
            if(!item.id || !item.quantity){
                return Response.json(
                    { error : "Invalid request" },
                    { status: 400 }
                )
            }
        }

        const result = cart.map( (item) => {
            const products = product.find( (p) => p.id === item.id );
            if (!products){
                console.log(`CART_LOG : Items with ID ${item.id}, does not exist`)
                return {
                    name: null,
                    quantity: 0,
                }
            }
            return {
                name: products.name,
                quantity: item.quantity
            }
        })

        return Response.json(
            { message: "Order Successful!", order: result },
            { status: 201 }
        )
    } catch(error){
        return Response.json(
            { error: 'Invalid Request' },
            { status: 400 }
        )
    }
    
}