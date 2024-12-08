import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import logo from "@/assets/Logo.png"
import Image from 'next/image';

const Header = () => {
    return (
        <header className="w-full">
            {/* Top Bar */}
            <div className="bg-[#272343] text-white text-sm py-2">
                <div className="container mx-auto flex justify-between items-center px-6 text-opacity-70">
                    <p>✓ Free Shipping On All Orders Over $50</p>
                    <div className="flex items-center space-x-4">
                        <span>Eng</span>
                        <Link href="#" className="hover:underline">
                            FAQs
                        </Link>
                        <Link href="#" className="hover:underline">
                            Need Help
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-[#F0F2F3] py-4 shadow-sm">
                <div className="container mx-auto flex justify-between items-center px-6">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <Image width={160} height={40}
                            src={logo}
                            alt="Comforty Logo"

                        />
                    </div>



                    {/* Cart and Contact */}
                    <div className="flex items-center space-x-6">
                        {/* Cart Button */}
                        <Link href="/cart" className="flex items-center space-x-2">
                            <button className="bg-white text-teal-600 border border-teal-600 px-4 py-2 rounded-md hover:bg-teal-600 hover:text-white flex items-center">
                                <FaShoppingCart />
                                <span className="ml-2">Cart</span>
                                <span className="bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                                    0
                                </span>
                            </button>
                        </Link>


                    </div>
                </div>
            </div>
            <div className="bg-white border-b py-3 shadow-sm">
                <div className="container mx-auto flex justify-between items-center px-6">

                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-600 hover:text-gray-900">
                            Home
                        </Link>
                        <Link href="/shop" className="text-gray-600 hover:text-gray-900">
                            Shop
                        </Link>
                        <Link href="/products" className="text-gray-600 hover:text-gray-900">
                            Product
                        </Link>
                        <Link href="/pages" className="text-gray-600 hover:text-gray-900">
                            Pages
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-gray-900">
                            About
                        </Link>
                    </nav>




                    {/* Contact Info */}
                    <p className="text-gray-500 text-sm">
                        Contact: <span className="font-medium">(808) 555-0111</span>
                    </p>
                </div>
            </div>

            <div>





            </div>
        </header>
    );
};

export default Header;
