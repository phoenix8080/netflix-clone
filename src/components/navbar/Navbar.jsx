import { Search } from "@material-ui/icons";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
    
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <div className="logoname">phoenix movie</div>
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>Popular</span>
                    <span>My list</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>Kids</span>
                    <NotificationsIcon className="icon"/>
                    <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
                />
                <div className="profile">
                <ArrowDropDownIcon className="icon"/>
                    <div className="options">
                        <span>setting</span>
                        <span>log out</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
