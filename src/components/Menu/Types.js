import { NavLink } from "react-router-dom";

export function Types(props) {
  return (
    <div className="types">
      <NavLink to="/Menu-Items">
        <div className="types-cont">
          <div className="types-img">
            <img className="types-img-ind" src={props.src} alt="" />
          </div>
          <div className="cont-head">
            <h3 className="headd">{props.h3}</h3>
            <p className="desc" style={{ fontSize: "medium", margin: "2% 5%" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
            </p>
            <NavLink to="/Menu-Items">
              <button className="types-button">See More</button>
            </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
