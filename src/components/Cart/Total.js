import { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../context";

export function Total() {
  const { getTotalCost } = useContext(ShopContext);
  const totalAmount = getTotalCost();
  return (
    <div className="total-cost">
      <p className="order-sum-head">Order Summary</p>
      <div className="promo">
        <p
          className="order-sum-promo"
          style={{ textAlign: "start", paddingLeft: "10%" }}
        >
          Promo Code
        </p>
        <div className="input">
          <input className="order-input" type="text" placeholder="Enter Code" />
          <button className="btn-submit">Submit</button>
        </div>
      </div>
      <div className="costs">
        <div className="costs-details">
          <div className="costs-detail">
            <p>Subtotal</p>
            <p>Shipping Cost</p>
            <p>Discount</p>
          </div>
          <div className="costs-detail">
            <p>${totalAmount}</p>
            <p>$0</p>
            <p>$0</p>
          </div>
        </div>
        <div className="check">
          <div className="costs-total">
            <p style={{ margin: "0px" }}>TOTAL</p>
            <p style={{ margin: "0px" }}>${totalAmount}</p>
          </div>

          <div className="btn-container">
            <button className="btncheckout" style={{ cursor: "pointer" }}>
              Check Out{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
