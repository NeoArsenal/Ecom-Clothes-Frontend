"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";


export const dataCarouselTop = [
    {
        id: 1,
        title: "Envio en 24/48 h",
        description: "Como clinete VIP, disfruta de envios gratis en 24/48 h",
        link: "#"
    },
    {
        id: 2,
        title: "Nuevas colecciones",
        description: "Descubre las nuevas colecciones de temporada",
        link: "#"
    },
    {
        id: 3,
        title: "Ofertas exclusivas",
        description: "Aprovecha nuestras ofertas exclusivas por tiempo limitado",
        link: "#"
    }

]

const CarouselTextBanner = () => {
    const router = useRouter();

    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay:2500
                    })
                ]}
            >
                <CarouselContent>

                    {dataCarouselTop.map(({id, title, link, description}) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <div>
                             <Card className="shadow-none border-none bg-tranparent">
                                 <CardContent className="flex flex-col items-center justify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                        <p className="sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                 </CardContent>
                             </Card>

                         </div>
                     </CarouselItem>
                    ))}
                </CarouselContent>             
            </Carousel>
        </div>
    );
};

export default CarouselTextBanner;