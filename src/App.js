
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import NavBar from "./GNparticals/navbar"


import Home from "./GNparticals/NavItems/Home";
import Contact from "./GNparticals/NavItems/contact";
import About from "./GNparticals/NavItems/about";
import UserCardData from "./GNparticals/NavItems/UserCard";




function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path='/:username' component={UserCardData}/>
      </Switch>
      
    </BrowserRouter>
      
  );
}

export default App;
