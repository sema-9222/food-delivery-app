import "./Cart.css";
import { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { ShopContext } from "../context";
import { Products } from "../Menu-Items/Food";
import { CartItem } from "./CartItem";
import { useContext } from "react";
import { Footer } from "../Footer/Footer";
import { Details } from "./Details";
import { Total } from "./Total";

export function Cart() {
  const { cartItems } = useContext(ShopContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart-page">
      <Navbar />
      <div className="container">
        <div className="detail">
          <Details />

          <>
            {Products.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </>
        </div>
        <Total />
      </div>

      <Footer className="footer-home" style={{ marginTop: "10%" }} />
    </div>
  );
}
