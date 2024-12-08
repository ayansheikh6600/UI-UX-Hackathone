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
import Link from 'next/link';


export const products = [
  { id: 1, image: product1, title: "Library Stool Chair", price: 20, badge: "New" },
  { id: 2, image: product2, title: "Library Stool Chair", price: 20, originalPrice: "$30", badge: "Sale" },
  { id: 3, image: product3, title: "Library Stool Chair", price: 20 },
  { id: 4, image: product8, title: "Library Stool Chair", price: 20 },
  { id: 5, image: product5, title: "Library Stool Chair", price: 20, badge: "New" },
  { id: 6, image: product6, title: "Library Stool Chair", price: 20, originalPrice: "$30", badge: "Sale" },
  { id: 7, image: product7, title: "Library Stool Chair", price:  20 },
  { id: 8, image: product8, title: "Library Stool Chair", price: 20 },
  { id: 9, image: product1, title: "Library Stool Chair", price: 20, badge: "New" },
  { id: 10, image: product3, title: "Library Stool Chair", price: 20, originalPrice: "$30", badge: "Sale" },
  { id: 11, image: product5, title: "Library Stool Chair", price: 20 },
  { id: 12, image: product7, title: "Library Stool Chair", price: 20 }
]


const page = () => {

  return (
    <div className="py-12 bg-white">
      <div className='container mx-auto '>

        <h2 className="text-3xl font-bold text-start text-black mb-8">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <Link href={`/products/${index}`} key={index}>
              <ProductCard  {...product} />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full  bg-gray-50 p-8 text-center  mt-5">
        <h2 className="text-3xl font-semibold mb-">Or Subscribe To The Newsletter</h2>
        <div className="max-w-md mx-auto flex gap-2 mt-4 items-center ">
          <input
            type="email"
            placeholder="Email Address..."
            className="flex-1 py-2 px-4 bg-transparent outline-none border-b border-gray-400"
          />
          <button className="px-4 py-2 border-b border-gray-400  text-black font-medium">
            SUBMIT
          </button>
        </div>
      </div>


      <div className='bg-gray-50'>

        <div className="w-full container mx-auto flex flex-col gap-8  p-8 text-center">
          <h2 className="text-3xl font-semibold mb-">Follow products and discounts on Instagram</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map((product, index) => index <= 3 && (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>

    </div>

  )
}


export default page