import React from "react";
import { Link } from "react-router-dom";
export default function LeftSide() {
  return (
    <div>
      <style jsx>
        {`
          .searchInput {
          }

          .searchImg {
          }
          .searchInput input {
            height: 38px;
            width: 350px;
            padding-left: 10px;
            font-size: 16px;
            font-weight: bold;
            margin-top: 20px;
            margin-left: 20px;
          }

          .searchImg img {
            width: 40px;
            height: 40px;
            float: left;
            margin-top: 20px;
            margin-left: 20px;
          }
        `}
      </style>
      <div className="searchImg">
        <Link to="/">
          <img src="https://www.shareicon.net/download/2016/11/22/855119_circle_512x512.png" />
        </Link>
      </div>
      <div className="searchInput">
        <input type="text" placeholder="Try 'Orlando'" />
      </div>
    </div>
  );
}
