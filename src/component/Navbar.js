import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";
class Navbar extends Component{
    state = {clicked: false};
    handleClick=() =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
           <nav className="NavbarItems">
            <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <h1 className="Navbar-logo">AYUSH</h1>
            
            <ul className={this.state.clicked ? "nav-menu active":"nav-menu "}>
                {MenuItems.map((items,index) =>{
                    return(
                    <li key = {index}>
                    <Link className={items.cName} to={items.url}>
                    <i className={items.icon}></i>{items.title}</Link>
                    </li>
                );
                })}
                
                <button id="button">Register</button>

            </ul>
           </nav> 
        );
    }
}

export default Navbar;