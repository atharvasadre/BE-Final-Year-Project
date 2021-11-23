import { Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <Route path="/landingpage">
        <LandingPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </div>
  );
}

export default App;
