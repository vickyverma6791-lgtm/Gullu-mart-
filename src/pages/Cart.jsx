import React from 'react'
import { useCart } from '../Context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa'
import { LuNotebookText } from 'react-icons/lu'
import { MdDeliveryDining } from 'react-icons/md'
import { GiShoppingBag } from 'react-icons/gi'
import { toast } from 'react-toastify'

const Cart = ({location,Getloaction}) => {
  const { cartItem, setcartItem } = useCart()

  const removeItem = (id) => {
    setcartItem(cartItem.filter(item => item.id !== id))
    toast.success("Product is deleted from cart!")
  }

  const totalPrice =  cartItem.reduce((total,curtItem)=> total + curtItem.price,0)

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
    <div className="max-w-6xl mx-auto px-4">

      {cartItem.length > 0 ? (
        <>
          {/* HEADER */}
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-extrabold text-gray-800">
              My Cart
              <span className="text-gray-500 text-lg ml-2">
                ({cartItem.length} items)
              </span>
            </h1>
          </div>

          {/* CART ITEMS */}
          <div className="space-y-6">
            {cartItem.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 flex justify-between items-center"
              >
                {/* LEFT */}
                <div className="flex gap-5 items-center">
                  <img
                    src={item.thumbnail}
                    className="w-24 h-24 rounded-xl object-cover border"
                  />

                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <p className="text-green-600 font-bold mt-1">
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* QTY */}
                <div className="flex items-center bg-gray-100 rounded-lg overflow-auto">
                  <button className="px-4 py-2 text-xl font-bold hover:bg-gray-200">−</button>
                  <span className="px-4 font-semibold">{item.qty || 1}</span>
                  <button className="px-4 py-2 text-xl font-bold hover:bg-gray-200">+</button>
                </div>

                {/* DELETE */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-3 rounded-full hover:bg-red-50 transition"
                >
                  <FaRegTrashAlt className="text-red-500 text-xl" />
                </button>
              </div>
            ))}
          </div>

          {/* CHECKOUT SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

            {/* DELIVERY INFO */}
            <div className="bg-white rounded-xl shadow-md p-7 space-y-5">
              <h2 className="text-2xl font-bold text-gray-800">
                🚚 Delivery Information
              </h2>

              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Phone Number" />

              <textarea
                rows="3"
                className="input"
                value={`${location.city}, ${location.principalSubdivision}, ${location.countryName}`}
              />

              <div className="grid grid-cols-2 gap-4">
                <input className="input" value={location.city} />
                <input className="input" value={location.principalSubdivision} />
              </div>

              <input className="input" placeholder="Pincode" />

              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                Place Order
              </button>

              <div className="text-center space-y-2">
                <p className="text-gray-400">— OR —</p>
                <button
                  onClick={Getloaction}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Detect Location
                </button>
              </div>
            </div>

            {/* BILL DETAILS */}
            <div className="bg-white rounded-xl shadow-md p-7 space-y-4 h-fit">
              <h2 className="text-xl font-bold text-gray-800">
                🧾 Bill Details
              </h2>

              <div className="flex justify-between text-gray-700">
                <span className="flex gap-2 items-center">
                  <LuNotebookText /> Items Total
                </span>
                <span>${totalPrice}</span>
              </div>

              <div className="flex justify-between text-gray-700">
                <span className="flex gap-2 items-center">
                  <MdDeliveryDining /> Delivery
                </span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>

              <div className="flex justify-between text-gray-700">
                <span className="flex gap-2 items-center">
                  <GiShoppingBag /> Handling
                </span>
                <span>$5</span>
              </div>

              <hr />

              <div className="flex justify-between text-lg font-bold">
                <span>Grand Total</span>
                <span>${totalPrice + 5}</span>
              </div>

              {/* COUPON */}
              <div className="pt-4">
                <h3 className="font-semibold text-gray-700 mb-2">
                  Apply Promo Code
                </h3>
                <div className="flex gap-3">
                  <input className="input w-full" placeholder="Enter code" />
                  <button className="border px-4 rounded-lg hover:bg-gray-100">
                    Apply
                  </button>
                </div>
              </div>

              <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 mt-5">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center mt-24">
          <h1 className="text-4xl font-bold text-gray-400">🛒 Cart is Empty</h1>
          <p className="text-gray-500 mt-2">Add some products to continue</p>
        </div>
      )}
    </div>

    {/* INPUT STYLE */}
    <style>
      {`
        .input{
          padding:10px;
          border-radius:10px;
          border:1px solid #ddd;
          outline:none;
        }
        .input:focus{
          border-color:#000;
        }
      `}
    </style>
  </div>
)

}

export default Cart
