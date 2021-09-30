import GlobalStyles from "./GlobalStyles";
import NavbarContainer from "./container/common/navbar/NavbarContainer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { useEffect, useState } from "react";

function App() {
  const { isLoggined, setIsLoggined } = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (accessToken) {
      setIsLoggined(true);
    } else {
      setIsLoggined(false);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <NavbarContainer isLoggined={isLoggined} />
      <Route path="/" exact={true} component={Home} />
      <Route path="/signin" exact={true} component={Signin} />
      <Route path="/signup" exact={true} component={Signup} />
    </>
  );
}

export default App;
