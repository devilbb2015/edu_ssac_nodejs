import GlobalStyles from "./GlobalStyles";
import NavbarContainer from "./container/common/navbar/NavbarContainer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavbarContainer />
      <Route path="/" exact={true} component={Home} />
      <Route path="/signin" exact={true} component={Signin} />
      <Route path="/signup" exact={true} component={Signup} />
    </>
  );
}

export default App;
