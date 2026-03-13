"use client";
import { useLovedProducts } from "@/hooks/use-loved-products";
import LoveItemProduct from "./components/loved-item-product";

export default function Page() {
    const {lovedItems} = useLovedProducts();

    return (
        <div className="max-w-4xl mx-auto sm:py-32 sm:px-24">
            <h1 className="sm:text-2xl">
                Productos que te gustan
            </h1>

            <div>
                <div>
                    {lovedItems.length === 0 && (
                        <p className="text-sm text-muted-foreground">
                            No tienes productos amados.
                        </p>
                    )}

                    <ul>
                        {lovedItems.map((item) => (
                            <LoveItemProduct key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}