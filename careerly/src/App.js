import GlobalStyles from "./GlobalStyles";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  
  return (
    <>
      <GlobalStyles />
      <Route path="/" exact={true} component={Home} />
      
      
    </>
  );
}

export default App;
