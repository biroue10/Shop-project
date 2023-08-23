
import { useCart } from "../context/CartContext";

export const ShoppingCartPage = () => {
    const { cartItems } = useCart();
    return (
        <div>
            <h1>ShoppingCartPage</h1>
            {cartItems.map((item) => (
                <p key={item.product.id}>{item.product.title}</p>
            ))}

        </div>
    )
}
