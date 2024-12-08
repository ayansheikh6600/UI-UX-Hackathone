import ProductCard from '@/shared/ProductCard';
import React from 'react'
import product1 from '@/assets/categoryChar.png'
import product2 from '@/assets/categoryChar1.png'
import product3 from '@/assets/categoryChar2.png'
import product4 from '@/assets/chair.png'
import product5 from '@/assets/chair1.png'
import product6 from '@/assets/chair2.png'
import product7 from '@/assets/chair3.png'
import product8 from '@/assets/chair4.png'

const page = () => {
    const products = [
        { image: product1, title: "Library Stool Chair", price: "$20", badge: "New" },
        { image: product2, title: "Library Stool Chair", price: "$20", originalPrice: "$30", badge: "Sale" },
        { image: product3, title: "Library Stool Chair", price: "$20" },
        { image: product8, title: "Library Stool Chair", price: "$20" },
        { image: product5, title: "Library Stool Chair", price: "$20", badge: "New" },
        { image: product6, title: "Library Stool Chair", price: "$20", originalPrice: "$30", badge: "Sale" },
        { image: product7, title: "Library Stool Chair", price: "$20" },
        { image: product8, title: "Library Stool Chair", price: "$20" },
        { image: product1, title: "Library Stool Chair", price: "$20", badge: "New" },
        { image: product3, title: "Library Stool Chair", price: "$20", originalPrice: "$30", badge: "Sale" },
        { image: product5, title: "Library Stool Chair", price: "$20" },
        { image: product7, title: "Library Stool Chair", price: "$20" },
      ];
    
      return (
        <div className="py-12 bg-white">
            <div className='container mx-auto '>

          <h2 className="text-2xl font-bold text-center text-black mb-8">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
          </div>
            </div>
        </div>
        
    )
}

export default page