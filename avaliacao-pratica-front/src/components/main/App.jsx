import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Nav from "../template/Nav";
import Footer from "../template/Footer";
import Routes from "../settings/Routes";

export default props =>
    <BrowserRouter>
        <div className="app">
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
    </BrowserRouter>