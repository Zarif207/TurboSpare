import React from "react";
import { FaTruck, FaUndoAlt, FaHeadset } from "react-icons/fa";

function Extra() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">

          {/* Item 1 */}
          <div className="px-6">
            <FaTruck className="mx-auto text-4xl text-gray-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Free Delivery</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We offer free delivery on all orders with no hidden charges.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-200 mx-auto"></div>

          {/* Item 2 */}
          <div className="px-6">
            <FaUndoAlt className="mx-auto text-4xl text-gray-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">30 Day Return</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Not satisfied? Return your product within 30 days easily.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-200 mx-auto"></div>

          {/* Item 3 */}
          <div className="px-6">
            <FaHeadset className="mx-auto text-4xl text-gray-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our support team is available anytime you need help.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Extra;