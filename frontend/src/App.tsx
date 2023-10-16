import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Myreveiw from "./pages/myreview/myreview";
import {
  About,
  Home,
  Cart,
  Error,
  Landing,
  Login,
  Register,
  Orders,
  Products,
  Payment,
  SingleProduct,
  Createreview,

 
} from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<SingleProduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/About" element={<About />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Createreview" element={<Createreview />} />
        <Route path="/Myreview" element={<Myreveiw />} />
      </Routes>
    </Router>
  );
};
export default App;
