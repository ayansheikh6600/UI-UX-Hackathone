import React from "react";
import Image from "next/image";

interface ProductProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  badge?: "New" | "Sale";
}

const ProductCard: React.FC<ProductProps> = ({ image, title, price, originalPrice, badge }) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Badge */}
      {badge && (
        <div
          className={`absolute top-2 left-2 px-3 py-1 text-xs font-bold text-white rounded-md ${
            badge === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
          }`}
        >
          {badge}
        </div>
      )}

      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-4 text-start text-black">
        <h3 className="text-lg font-semibold text-[#007580]">{title}</h3>
        <div className="flex items-center justify-start space-x-2">
          <p className=" font-bold">{price}</p>
          {originalPrice && (
            <p className="text-gray-500 line-through text-sm">{originalPrice}</p>
          )}
        </div>
      </div>

      {/* Cart Icon */}
      <div className="absolute bottom-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.362 2.17M7 7h10M7 7l-1.5 8.5M7 7l3.764 8M17 7h4.5M17 7l-2.264 8m0 0H9m5.236-8L13.5 3m3.764 8L21 19m0 0H7m14 0a2 2 0 11-4 0m0 0H9m10 0a2 2 0 11-4 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductCard;
