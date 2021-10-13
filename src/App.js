// import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LargeService from "./components/LargeService/LargeService";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Review from "./components/Review/Review";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/lgservices">
                <LargeService></LargeService>
              </PrivateRoute>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/cart">
                <Cart></Cart>
              </Route>
              <Route exact path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>
      </CartProvider>
    </div>
  );
}

export default App;
