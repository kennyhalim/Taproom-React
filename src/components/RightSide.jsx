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
            border-bottom: 2px solid white;
            padding-bottom: 30px;
            cursor: pointer;
          }
        `}
      </style>

      <div className="container">
        <Link to="/">
          <div className="first">
            <p>Home</p>
          </div>
        </Link>
        <Link to="/keglist">
          <div className="first">
            <p>Keg Lists</p>
          </div>
        </Link>
        <div className="first">
          <p>Brew Market</p>
        </div>
        <Link to="/about">
          <div className="first">
            <p>About Us</p>
          </div>
        </Link>
        <div className="first">
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}
