import pasta from "./photos/pasta.png";
import veggy from "./photos/veggy.png";
import paella from "./photos/paella1.jpg";
import ege from "./photos/vine.jpg";
import cashew from "./photos/cashew.jpg";
import salad from "./photos/salad.png";
import noodle from "./photos/noodle.png";
import people from "./photos/people.jpg";
import "./Home.css";
import { useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { Menu } from "../Menu/Menu";
import { NavLink, Route, Routes } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Routes>
        <Route path="/Menu" element={<Menu />} />;
      </Routes>
      <Navbar />
      <div className="main main-responsive">
        <div className="text">
          <p className="head">
            <span className="orange">"Name"</span> Lorem
            <br /> Ipsum Dolor Sit!
          </p>
          <p className="text-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum at
            in laboriosam officiis id non tempora blanditiis adipisci quia
            doloremque.
          </p>
        </div>

        <img src={pasta} alt="pasta" className="pasta" />
      </div>
      <div className="acc">
        <div className="buttons1home">
          <p
            className="signorlog"
            style={{ textAlign: "start", marginLeft: "8vw" }}
          >
            Sign up or log in
          </p>
          <NavLink style={{ textDecoration: "none" }} to="/Account">
            <p className="loginhome">Log in</p>
            <p className="loginhome signhome1">Sign up</p>
          </NavLink>
        </div>
      </div>

      <div className="menu-resp">
        <Menu />
      </div>
      <div className="details">
        <div className="main Main">
          <img src={veggy} alt="" className="veggy" />
          <div className="text text1">
            <p className="head">
              <span className="orange">Fresh </span> Ingredients
            </p>
            <p className="text-1 second">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              ipsam cumque odio aliquam ut. Velit veniam eaque adipisci.
            </p>
            <NavLink to="/Menu">
              {" "}
              <button className="btn-first">Menu</button>
            </NavLink>
          </div>
        </div>
        <div className="main main2 Main">
          <div className="text-3">
            <p className="head head3">
              <span className="orange">Gourmet </span> Delicacies
            </p>
            <p className="text-1 third">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              voluptatem perspiciatis ducimus natus asperiores vel culpa
              reiciendis maiores quos rem.
            </p>
          </div>
          <NavLink to="/Menu">
            <div className="images">
              <div className="imagen">
                <img src={paella} alt="" className="food" />
                <div className="name">Paella</div>
              </div>
              <div className="imagen">
                <img src={ege} alt="" className="food" />
                <div className="name">Perch Fillet with White Wine</div>
              </div>
              <div className="imagen">
                <img src={cashew} alt="" className="food" />
                <div className="name">Cashew Chicken</div>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="main Main">
          <div className="text all4">
            <p className="head">
              <span className="orange">Healthy</span> Options
            </p>
            <p className="text-1 text4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              cupiditate qui distinctio voluptatibus inventore? Nobis sit ullam
              sapiente quisquam eum?
            </p>
            <button className="btn-less">Healthy options &#8594;</button>
          </div>
          <img src={salad} alt="" className="salad" />
        </div>
        <div className="main Main">
          <img src={noodle} alt="" className="noodle" />
          <div className="text text1">
            <p className="head">
              <span className="orange">World</span> Cuisine
            </p>
            <p className="text-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              pariatur. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Possimus eius provident dolore beatae, architecto voluptatum
              quam veritatis nemo quidem dignissimos.
            </p>
            <NavLink to="/Menu-Items">
              <button className="btn-less btn5">World Cuisine &#8594;</button>
            </NavLink>
          </div>
        </div>
        <div className="main mainlast Main">
          <img src={people} alt="" className="people" />
          <div className="text textlast">
            <p className="head">
              <span className="orange">Lorem</span> Ipsum Dolor
            </p>
            <p className="text-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              pariatur. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Possimus eius provident dolore beatae, architecto voluptatum
              quam veritatis nemo quidem dignissimos.
            </p>
          </div>
        </div>
      </div>

      <Footer className="footer-home" style={{ marginTop: "40%" }} />
    </div>
  );
}

export default Home;
