import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assets/Logo.png"
import paymentLogo from  "@/assets/PaymentMethod.png"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-7">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Comforty Logo" width={160} height={40} />
            
          </div>
          <p className="text-gray-500 mt-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <div className="flex space-x-3 mt-4">
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <i className="fab fa-pinterest"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>

        {/* Category Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Category</h3>
          <ul className="mt-4 space-y-2 text-gray-500">
            <li><Link href="#" className="hover:text-gray-800">Sofa</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Armchair</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Wing Chair</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Desk Chair</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Wooden Chair</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Park Bench</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className=''>
          <h3 className="text-lg font-semibold text-gray-800">Support</h3>
          <ul className="mt-4 space-y-2 text-gray-500">
            <li><Link href="#" className="hover:text-gray-800">Help & Support</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-gray-800">Help</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Newsletter</h3>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 p-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>
 <hr />
      {/* Footer Bottom */}
      <div className=" container mx-auto flex items-center justify-between border-gray-200  pt-3 text-center">
        <p className="text-gray-500 text-sm">
          © 2021 – Blogy – Designed & Developed by Zakirsoft
        </p>
        <div className="flex justify-center space-x-3 mt-3">
          <Image src={paymentLogo} alt="PayPal"   className="grayscale"  />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
