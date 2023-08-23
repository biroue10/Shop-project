import { useCart } from "../context/CartContext";
import Header from "../components/Header";

export const ShoppingCartPage = () => {
    const { cartItems } = useCart();
    return (
        <div>
            <Header />
            <h1>ShoppingCartPage</h1>
            {cartItems.map((item) => (
                <p key={item.product.id}>{item.product.title}</p>
            ))}

        </div>
    )
}
