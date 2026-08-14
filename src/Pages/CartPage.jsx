import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { formatPrice } from "./products";

const CartPage = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        <p className="text-gray-500 mt-3">
          Looks like you haven't added any mobiles yet.
        </p>
        <Link
          to="/products"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center gap-4 border rounded-xl p-4"
          >
            <img
              src={item.image}
              alt={item.brand}
              className="w-24 h-24 object-contain bg-gray-50 rounded"
            />

            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-semibold">{item.brand}</h3>
              <p className="text-blue-600 font-bold mt-1">
                {formatPrice(item.price)}
              </p>
            </div>

            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4 py-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>

            <p className="font-semibold w-28 text-center">
              {formatPrice(item.price * item.quantity)}
            </p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
        <Link to="/products" className="text-blue-600 hover:underline">
          &larr; Continue Shopping
        </Link>

        <div className="text-right">
          <p className="text-gray-500">Subtotal</p>
          <p className="text-2xl font-bold">{formatPrice(cartTotal)}</p>
        </div>

        <button
          onClick={() => navigate("/payment")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg font-semibold"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
