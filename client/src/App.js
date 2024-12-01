import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter instead of Router
import Products from "./component/Products";
import About from "./component/About";
import Footer from "./component/Footer";
import Register from "./component/Register";
import Login from "./component/Login";
import Liptint from "./component/Liptint";
import Profile from "./component/Profile";
import Order from "./component/Order";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Liptint" element={<Liptint />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </Container>
      </Router>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default App;
