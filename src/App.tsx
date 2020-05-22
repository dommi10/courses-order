import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import FooterPage from "./components/pages/FooterPage";

function App() {
  return (
    <Router>
      <PublicRoute exact path="/login" component={LoginPage} />
      <PublicRoute exact path="/signup" component={SignUpPage} />
      <PrivateRoute exact path="/" component={HomePage} />
      <PrivateRoute exact path="/cart" component={CartPage} />
      <FooterPage />
    </Router>
  );
}

export default App;
