import GlobalStyles from "./GlobalStyles";
import NavbarContainer from "./container/common/navbar/NavbarContainer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";
import { useEffect, useState } from "react";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import axios from "axios";

function App() {
  const [isLoggined, setIsLoggined] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (accessToken) {
      axios({
        method: "GET",
        url: "http://localhost:3000/ssac/auth/profile",
        headers: { Authorization: accessToken },
      })
        .then((response) => {
          const result = response.data.data;
          console.log(result);
          setProfile(result);
          setIsLoggined(true);
        })
        .catch((error) => {
          console.log(error);
          setIsLoggined(false);
        });
    } else {
      setIsLoggined(false);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <NavbarContainer
        profile={profile}
        isLoggined={isLoggined}
        setIsLoggined={setIsLoggined}
      />
      <Route path="/" exact={true} component={Home} />
      <Route
        path="/signin"
        exact={true}
        component={() => <Signin setIsLoggined={setIsLoggined} />}
      />
      <Route path="/signup" exact={true} component={Signup} />
      <Route path="/write" exact={true} component={Write} />
      <Route
        path="/post/:postId"
        exact={true}
        component={() => <Detail profile={profile} />}
      />
    </>
  );
}

export default App;
