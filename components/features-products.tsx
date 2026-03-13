/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCartIcon } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";

const FeaturesProducts = () => {
    // Obtenemos los datos y forzamos el tipado para Strapi v5
    const { loading, result } = useGetFeaturedProducts() as { 
        loading: boolean; 
        result: ProductType[] | null 
    };
    
    const router = useRouter();
    const {addItem} = useCart();

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    
                    {/* Renderizado para Strapi v5: Datos directos sin .attributes */}
                    {!loading && result && result.map((product: ProductType) => {
                        const { slug, images, productName, price, id } = product;
                        
                        // En v5, images suele ser un array directo. Accedemos a la url de la primera imagen.
                        const imageUrl = images?.[0]?.url;

                        return (
                            <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                <div className="p-1">
                                    <Card className="py-4 border border-gray-200 shadow-none">
                                        <CardContent className="relative flex items-center justify-center px-6">
                                            <img 
                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`} 
                                                alt={productName} 
                                                className="rounded-lg object-cover"
                                            />
                                            <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                <div className="flex justify-center gap-x-6">
                                                    <IconButton 
                                                        onClick={() => router.push(`/product/${slug}`)} 
                                                        icon={<Expand size={20} />} 
                                                        className="text-gray-600"
                                                    />
                                                    <IconButton 
                                                        onClick={() => addItem(product)} 
                                                        icon={<ShoppingCartIcon size={20} />} 
                                                        className="text-gray-600"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                        <div className="flex justify-between gap-4 px-8 pb-4">
                                            <h3 className="text-lg font-bold">{productName}</h3>
                                            <div className="flex items-center gap-3">
                                                <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit text-xs">
                                                    {formatPrice(price)}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex"/>
            </Carousel>
        </div>
    );
}

export default FeaturesProducts;