
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import AddToCartBg from '../assets/add_to_cart.svg'
export const ShoppingCartPage = () => {
  const { cartItems, setCartItems, addToCart } = useCart();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    function getTotals() {
      const discountPrice = 0;

      let total = 0;
      cartItems.forEach(item => {
        if (item.product.discountPercentage) {
          total += (item.product.price - (item.product.price * (item.product.discountPercentage / 100))) * item.quantity;
        }
        else {

          total += item.product.price * item.quantity;
        }
      });
      setTotal(total.toFixed(2))
    }
    getTotals()
  }, [cartItems])

  const removeItem = (product) => {
    const updatedCartItems = cartItems.filter(item => item.product !== product);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
        <div className="mt-8 flex flex-col">
          <ul role="list" className="-my-6 divide-y divide-gray-200">

            {cartItems.length === 0 && (
              <div className="text-center ">
                <p className="text-2xl">Your cart is empty</p>
              <img className="w-full h-full lg:max-w-3xl mx-auto mt-12" src={AddToCartBg} alt="add_to_cart.svg" />

              </div>
            )}

          {cartItems.map((item) => (
            <li key={item.product.id} className="flex py-6 ">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src={item.product.thumbnail} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
              </div>

              <div className="ml-4 flex flex-1 flex-col pr-2">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <Link to={`/product/${item.product.id}`}  >{item.product.title}</Link>
                    </h3>
                    <div className="ml-4">
                      <p>${(item.product.price - (item.product.price * (item.product.discountPercentage / 100))).toFixed(2)}</p>
                      <s className="text-gray-500 text-sm">${(item.product.price).toFixed(2)}</s>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{item.product.description}</p>
                </div>
                <div className="flex flex-1 mt-4 items-center  justify-between text-sm ">
                  <div className="flex items-center text-center space-x-4">
                    <p className="text-gray-500">Qty </p>
                    <div className="flex ">
                      <button
                        onClick={() => {
                          const newQuantity = item.quantity - 1;
                          if (newQuantity >= 0) {
                            addToCart(item.product, newQuantity);
                          }
                        }}
                        className="w-8 h-8 rounded-l-md bg-gray-100 hover:bg-gray-200 font-bold text-lg text-orange-500"  > - </button>
                      <p className="w-8 h-8 bg-gray-100 flex items-center justify-center"> {item.quantity} </p>
                      <button
                        onClick={() => {
                          const newQuantity = item.quantity + 1;
                          addToCart(item.product, newQuantity);
                        }}
                        className="w-8 h-8 rounded-r-md bg-gray-100 hover:bg-gray-200 font-bold text-lg text-orange-500"  > + </button>
                    </div>
                  </div>
                  <div className="flex">
                    <button onClick={() => removeItem(item.product)} type="button" className="font-medium text-orange-600 hover:text-orange-500">Remove</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
          </ul>

          <div className="p-4 w-full  border-y mt-8">
            <div className="flex justify-between">
              <p className="font-bold">Total</p>
              <p className="font-bold">${total}</p>
          </div>
            <div className="mt-6">
              <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700">Checkout</a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p >
                or
                <Link to={'/products/all'} className="ml-2 font-medium text-orange-600 hover:text-orange-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>

        </div>
    )
}
