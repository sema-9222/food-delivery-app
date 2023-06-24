import "./Menu-Items.css";
import icon from "./cart.svg";
import { ShopContext } from "../context";
import { useContext } from "react";

export function Items(props) {
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);
  const { id, foodName, price, foodImage } = props.data;

  const cartItemAmount = cartItems[id];
  return (
    <div className="smth">
      <div className="menu-menu">
        <img src={foodImage} alt="" className="menu-item-img" />
        <div className="item-info">
          <h3 className="menu-item-head">{foodName}</h3>
          <p style={{ fontSize: "80%", margin: "0", fontFamily: "Quicksand" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="order">
            <h3 className="money1">${price}</h3>

            {cartItemAmount > 0 ? (
              <div style={{ marginLeft: "40%", display: "flex" }}>
                <button
                  className="btn-remove"
                  onClick={() => {
                    removeFromCart(id);
                  }}
                >
                  -
                </button>
                <p style={{ margin: "0% 15%" }}> {cartItemAmount}</p>
                <button
                  className="btn-add"
                  onClick={() => {
                    addToCart(id);
                  }}
                >
                  +
                </button>
              </div>
            ) : (
              <>
                <button
                  className="btn-order"
                  onClick={() => {
                    addToCart(id);
                  }}
                >
                  <img src={icon} alt="" style={{ marginRight: "5%" }} />
                  Add to cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
