import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { formatPrice } from "./products";

const PaymentPage = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [placing, setPlacing] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const shipping = cart.length > 0 ? 0 : 0;
  const total = cartTotal + shipping;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setPlacing(true);
    // Simulated order placement (no real payment gateway is wired up yet).
    setTimeout(() => {
      clearCart();
      setPlacing(false);
      navigate("/order-success");
    }, 1200);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        <p className="text-gray-500 mt-3">
          Add a product to your cart before checking out.
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
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Shipping + Payment form */}
        <form
          onSubmit={handlePlaceOrder}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2"
              />
              <input
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="pincode"
                required
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="address"
                required
                value={form.address}
                onChange={handleChange}
                placeholder="Address"
                className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2"
              />
              <input
                name="city"
                required
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="space-y-3">
              {[
                { id: "card", label: "Credit / Debit Card" },
                { id: "upi", label: "UPI" },
                { id: "cod", label: "Cash on Delivery" },
              ].map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition ${
                    paymentMethod === method.id
                      ? "border-blue-600 ring-2 ring-blue-100"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={() => setPaymentMethod(method.id)}
                  />
                  {method.label}
                </label>
              ))}
            </div>

            {paymentMethod === "card" && (
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <input
                  required
                  placeholder="Card Number"
                  className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2"
                />
                <input
                  required
                  placeholder="MM / YY"
                  className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  required
                  placeholder="CVV"
                  className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="mt-4">
                <input
                  required
                  placeholder="UPI ID (e.g. name@bank)"
                  className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={placing}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-lg font-semibold transition"
          >
            {placing ? "Placing Order..." : `Place Order - ${formatPrice(total)}`}
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-xl p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-3 items-center">
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-16 h-16 object-contain bg-white rounded border"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium line-clamp-2">
                    {item.brand}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="w-6 h-6 flex items-center justify-center border rounded"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="w-6 h-6 flex items-center justify-center border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-500 hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-5 pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
