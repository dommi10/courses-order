import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <Router>
      <PublicRoute exact path="/login" component={LoginPage} />
      <PrivateRoute exact path="/" component={HomePage} />
    </Router>
  );
}

export default App;
