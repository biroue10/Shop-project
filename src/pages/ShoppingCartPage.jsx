
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const ShoppingCartPage = () => {
    const { cartItems } = useCart();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    function getTotals() {
      let total = 0;
      cartItems.forEach(item => {
        total += item.product.price * item.quantity;
      });
      setTotal(total)
    }
    getTotals()
  }, [cartItems])

    return (
        <div>
        <h1 className="text-4xl">ShoppingCartPage</h1>
        <div className="mt-8 flex flex-col">

          {cartItems.map((item) => (
            <div className="p-4 w-full flex justify-between border-b" key={item.product.id}>
              <img src={item.product.thumbnail} alt="" className="w-16 h-16 object-center object-cover" />
              <p >{item.product.title}</p>
              <p >{item.quantity}</p>
              <p >{item.product.price}</p>

            </div>
          ))}
          <div className="p-4 w-full flex justify-between border-b">
            <p className="font-bold">Total</p>
            <p className="font-bold">${total}</p>
          </div>
        </div>

        </div>
    )
}
