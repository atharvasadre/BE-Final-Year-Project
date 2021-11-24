import { Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";

function App() {
  return (
    <Navbar>
      <Route path="/landingpage">
        <LandingPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Navbar>
  );
}

export default App;
