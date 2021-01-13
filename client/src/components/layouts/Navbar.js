import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

export const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const { isAuthenticated, logout, user } = authContext;
    const { clearContacts } = contactContext;

    const onLogout = () => {
        logout();
        clearContacts();
    };

    const authLinks = (
        <Fragment>

      <li><Link to="#">Hello {user && user.name}</Link></li>

                    <li>
        <Link to="/about">About</Link>
      </li>

            <li>
        <a href="#!" onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
    );

    const guestLinks = (
        <Fragment>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
      
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
    );

    return (
        <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};

Navbar.defaultProps = {
    title: " KeeperCRM",
    icon: "fa fa-tasks"
};

export default Navbar;