import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-5 py-24 text-center">
      <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-4xl">
        ✓
      </div>
      <h1 className="text-3xl font-bold mt-6">Order Placed Successfully!</h1>
      <p className="text-gray-500 mt-3">
        Thank you for shopping with RX Square Mobiles. A confirmation will be
        sent to you shortly.
      </p>
      <Link
        to="/products"
        className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccessPage;
