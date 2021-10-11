import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import Registration from "./component/Registration"
import Post from "./component/Post";
import Content from "./component/Content";
import Login from "./component/Login";
import Logout from "./component/Logout";
import product from "./component/product"
import Productdetail from "./component/Productdetail"
import postdetail from "./component/postdeatil"
import Allproducts from "./component/Allproducts"





import "./css/card.css";

import "./css/slick-theme.css";
import "./css/slick.css";
import "./css/main.css";
import "./js/main.js";
import "./App.css";
import Postdetail from "./component/postdeatil";


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="content">
        <Header />
        <Route path="/" exact component={Content} />

        <Route path="/About" component={About} />
        <Route path="/Post" component={Post} />
        <Route path="/Contact" component={Contact} />
        <Route path="/allproducts" component={Allproducts} />

        <Route path="/Login" component={Login} />
        <Route path="/Logout" component={Logout} />
        
        <Route path="/fetchproduct/:id" component={product} />
        <Route path="/productdetail/:id" component={Productdetail} />
        <Route path="/postdetail/:slug" component={postdetail} />





        <Route path="/Registration" component={Registration} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
