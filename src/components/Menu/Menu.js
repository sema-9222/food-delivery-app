import pizza from "./Assets/pizzaaa.jpg";
import { Navbar } from "../Navbar/Navbar";
import "./Menu.css";
import { Types } from "./Types";
import breakfast from "./Assets/breakfast.jpg";
import vegan from "./Assets/vegan.jpg";
import world from "./Assets/world.jpg";
import sea from "./Assets/sea.jpg";
import healthy from "./Assets/healthy.jpg";
import meat from "./Assets/meat.jpg";
import chicken from "./Assets/chicken.jpg";
import dessert from "./Assets/dessert.jpg";
import drink from "./Assets/drink.jpg";
import { useEffect } from "react";
import { Footer } from "../Footer/Footer";

export function Menu(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={props.className} style={{ backgroundColor: "white" }}>
      <div className="menu">
        <Navbar />
        <img
          src={pizza}
          alt=""
          style={{ width: "100%", position: "absolute", top: "0px" }}
        />

        <div className="menu-text">MENU</div>
      </div>
      <p className="categories">Categories</p>
      <div className="menu-types">
        <Types src={breakfast} h3="Breakfast" />
        <Types src={vegan} h3="Vegan" />
        <Types src={world} h3="World Cuisine" />
        <Types src={chicken} h3="Chicken" />
        <Types src={meat} h3="Meat" />
        <Types src={sea} h3="Sea Food" />
        <Types src={healthy} h3="Healthy" />
        <Types src={dessert} h3="Dessert" />
        <Types src={drink} h3="Drinks" />
      </div>

      <Footer className="footer-home1" style={{ marginTop: "10%" }} />
    </div>
  );
}
