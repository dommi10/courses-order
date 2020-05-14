import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
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
      <FooterPage />
    </Router>
  );
}

export default App;
