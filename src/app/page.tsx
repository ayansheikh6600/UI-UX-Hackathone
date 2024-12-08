import AboutUs from "@/widgets/About";
import FAQSection from "@/widgets/FAQ";
import FeaturesSection from "@/widgets/Feature";
import HeroSection from "@/widgets/Hero";
import Image from "next/image";
import { products } from "./products/page";
import ProductCard from "@/shared/ProductCard";
import TopCategories from "@/widgets/Category";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <div className="w-full container mx-auto flex flex-col gap-8   p-8 text-center">
        <h2 className="text-3xl font-semibold text-start">Featured Product</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, index) => index <= 3 && (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>


      <TopCategories />


      <div className="w-full container mx-auto flex flex-col gap-8   p-8 text-center">
        <h2 className="text-3xl font-semibold ">Our Product</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, index) => index <= 7 && (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
