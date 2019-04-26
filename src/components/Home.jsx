import React from "react";
import { Link } from "react-router-dom";
import RightSide from "./RightSide";
import Beer from "../assets/images/beer.png";
import Footer from "./Footer";

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

        .enter {
          text-align: center;
        }
        .enter h1 {
          color: white;
          display: inline-block;
        }

        .enter h1:hover {
          border-bottom: 2px solid white;
          padding-bottom: 10px;
        }
      `}</style>
      <RightSide />
      <div className="imageContainer">
        <Link style={{ textDecoration: "none" }} to="/keglist">
          <img src={Beer} />
        </Link>
      </div>
      <Link style={{ textDecoration: "none" }} to="/keglist">
        <div className="enter">
          <h1>Enter Site</h1>
        </div>
      </Link>
      <Footer />
    </div>
  );
}
