import React from "react";

import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>Anish Jain</h1>
        <div className="links">
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>
          <Link to="/create">New BLog</Link>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
