import "./Footer.css";
import qr from "./qr code.png";
import app from "./app-store.png";
import google from "./google-eng.png";

export function Footer(props) {
  return (
    <div className={props.className}>
      <div className="links">
        <h3 className="orange">Discover</h3>
        <p>About us</p>
        <p>Careers</p>
        <p>Contact us</p>
      </div>
      <div className="links">
        <h3 className="orange">Help</h3>
        <p>FAQ</p>
        <p>Personal Data</p>
        <p>Privacy Policy</p>
      </div>
      <div className="links">
        <h3 className="orange">Download</h3>
        <img src={app} className="app" alt="" />
        <img src={google} className="googleb" alt="" />
      </div>
      <img src={qr} alt="" className="qr" />
    </div>
  );
}
