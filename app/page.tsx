import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturesProducts from "@/components/features-products";


export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturesProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct/>
      
    </main>
  );
}
