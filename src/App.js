
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/layout/Navbar";
import Adduser from "./components/users/Adduser";
import Edituser from "./components/users/editUser";
import User from "./components/users/user";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom/dist";


function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar></Navbar>
      <Routes>
     
     <Route exact path="/" component ={Home} />
     <Route exact path="/about" component ={About} />
     <Route exact path="/contact" component ={Contact} />
     <Route exact path="/user/add" component ={Adduser} />
     <Route exact path="/user/edit:id" component ={Edituser} />
     <Route exact path="/user/:id" component ={User} />
     
      </Routes>
    </div>
    </Router>
  );
}

export default App;
