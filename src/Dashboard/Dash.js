import { Component } from "react";
import { Link } from "react-router-dom";
import { DashItems } from "./DashItems";
import "./DashStyle.css";
class Dash extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <>
        <nav className="sidebarItems">
          <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <h1><i className="fa-solid fa-user"></i>Dashboard</h1>
          <div className="sidebar-right">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </nav>
        <div className="Main">
          <div className="User-left">
            <ul className={this.state.clicked ? "sidebar-menu active" : "side-menu"}>
              {DashItems.map((items, index) => {
                return (
                  <li key={index}>
                    <Link className={items.cName} to={items.url}>
                      <i className={items.icon}></i>
                      {this.state.clicked && items.title} {/* Only show title when clicked */}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="Right">
              <div className="Form">
                <h1>Welcome in underwork portal  </h1>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Dash;