import React from "react";
import { Link } from "react-router-dom";
import RightSide from "./RightSide";
import Beer from "../assets/images/beer.png";

export default function Home() {
  return (
    <div>
      <style jsx global>
        {`
          body {
            background: #28547a;
          }
        `}
      </style>
      <style jsx>{`
        .imageContainer img {
          height: 400px;
          width: 320px;
        }

        .imageContainer {
          text-align: center;
          margin-right: 90px;
        }

        .enter h1 {
          color: white;
          text-decoration: none;
        }
      `}</style>
      <RightSide />
      <div className="imageContainer">
        <img src={Beer} />
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="/keglist">
          <div className="enter">
            <h1>Enter Site</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
