import React from "react";
import { FaHeart, FaTrashAlt } from "react-icons/fa";

const Bag: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Bag Items Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Bag</h2>
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start space-x-4 border-b pb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Library Stool Chair"
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">
                  Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-sm text-gray-500">Size: L Quantity: 1</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">MRP: $99</p>
                <div className="flex items-center justify-end space-x-4 mt-2">
                  <button className="text-gray-500 hover:text-red-500">
                    <FaHeart />
                  </button>
                  <button className="text-gray-500 hover:text-red-500">
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start space-x-4 border-b pb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Library Stool Chair"
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">
                  Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-sm text-gray-500">Size: L Quantity: 1</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">MRP: $99</p>
                <div className="flex items-center justify-end space-x-4 mt-2">
                  <button className="text-gray-500 hover:text-red-500">
                    <FaHeart />
                  </button>
                  <button className="text-gray-500 hover:text-red-500">
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Summary</h2>
          <div className="bg-white shadow rounded p-6 space-y-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="font-semibold">$198.00</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Delivery & Handling</p>
              <p className="font-semibold">Free</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Total</p>
              <p className="font-bold text-lg">$198.00</p>
            </div>
            <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
