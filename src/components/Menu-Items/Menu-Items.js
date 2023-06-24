import "./Menu-Items.css";
import { Navbar } from "../Navbar/Navbar";
import worldCuisine from "./asian.png";
import { Items } from "./Items";
import { Footer } from "../Footer/Footer";
import { useEffect } from "react";
import { Products } from "./Food";

export function MenuItems() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="menu-page">
      <div className="menu-contt">
        <Navbar />
        <img className="world-cuisine" src={worldCuisine} alt="" />
        <div className="menu-text">WORLD CUISINE</div>
      </div>

      <div className="menu-items-list">
        {Products.map((product) => (
          <Items data={product} />
        ))}
      </div>
      <Footer className="footer-home" style={{ marginTop: "10%" }} />
    </div>
  );
}
