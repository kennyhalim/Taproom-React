import React from "react";
import { Link } from "react-router-dom";

export default function RightSide() {
  return (
    <div>
      <style jsx>
        {`
          .first {
            display: inline-block;
            padding: 10px;
            margin-left: 10px;
          }

          .container {
            text-align: right;
          }

          .first p {
            font-size: 15px;
            color: white;
            padding-bottom: 30px;
            border-bottom: 2px solid transparent;
          }

          .first p:hover {
            border-bottom: 2px solid white; /* Or whatever color you want */
            padding-bottom: 30px;
            cursor: pointer;
          }
        `}
      </style>

      <div className="container">
        <div className="first">
          <p>Become a host</p>
        </div>
        <div className="first">
          <p>Help</p>
        </div>
        <div className="first">
          <p>Sign up</p>
        </div>
        <div className="first">
          <p>Log in</p>
        </div>
        <Link to="/about">
          <div className="first">
            <p>About Us</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
