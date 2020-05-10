import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="bg-green-200 flex items-stretch justify-end">
        <div className="px-6">
          <Link to="/">
            <h2 className="text-xl">Home</h2>
          </Link>
        </div>

        <div className="px-6">
          <Link to="/budget">
            <h2 className="text-xl">Budget</h2>
          </Link>
        </div>

        <div className="px-6">
          <Link to="/about">
            <h2 className="text-xl">About</h2>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
