import NavBar from "./GNparticals/navbar";
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./GNparticals/NavItems/home";
import Contact from "./GNparticals/NavItems/contact";
import About from "./GNparticals/NavItems/about";


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Route path="/" component = {Home}/>

      </div>
    </BrowserRouter>
  );
}

export default App;
