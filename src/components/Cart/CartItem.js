import { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../context";

export function CartItem(props) {
  const { id, foodName, price, foodImage } = props.data;

  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="content">
      <div className="img-info">
        <img src={foodImage} alt="" className="cart-item-img" />
        <div className="cart-item-detail">
          <h3 className="menu-item-head">{foodName}</h3>
          <p
            style={{
              fontSize: "80%",
              margin: "0",
              fontFamily: "Quicksand",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="price-info">
        <h3 className="money">${price}</h3>
        <div className="quantity">
          <button
            className="remove "
            onClick={() => {
              removeFromCart(id);
            }}
          >
            -
          </button>
          <p style={{ width: "20%", margin: "0% 5% 0% 15%", border: "none" }}>
            {cartItems[id]}
          </p>
          <button
            className="add"
            onClick={() => {
              addToCart(id);
            }}
          >
            +
          </button>
        </div>

        <h3 className="money money-total">${cartItems[id] * price}</h3>
      </div>
    </div>
  );
}
