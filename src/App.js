import "./App.css";
import { Account } from "./components/Account/Account";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { MenuItems } from "./components/Menu-Items/Menu-Items";
import { Cart } from "./components/Cart/Cart";
import { ShopContextProvider } from "./components/context";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Menu-Items" element={<MenuItems />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
