import React from "react";
import RightSideYoung from "./RightSideYoung";
import LeftSide from "./LeftSide";
import Explore from "./Explore";

export default function SearchResults() {
  return (
    <div>
      <style jsx global>
        {`
          body {
            background: white;
          }
        `}
      </style>
      <style jsx>
        {`
          .testing {
            display: grid;
            grid-template-columns: 50% 50%;
            border-bottom: 1px solid #ebebeb;
          }

          .leftSide {
          }
          .rightSide {
            
          }

          button {
            width: 64px;
            height: 32px;
            background: white;
            border: 1px solid lightgray;
            border-radius: 5px;
            font-size: 14px;
            text-align: center;
            color: #515151;
            }
          }

          .buttons{
            padding-bottom: 10px;
            margin-top: 10px;
            border-bottom: 1px solid #ebebeb;
          }
        `}
      </style>
      <div className="testing">
        <div className="leftSide">
          <LeftSide />
        </div>
        <div className="rightSide">
          <RightSideYoung />
        </div>
      </div>
      <div className="buttons">
        <button style={{ marginLeft: "80px" }}>Dates</button>
        <button style={{ marginLeft: "10px" }}>Guests</button>
      </div>
      <Explore />
    </div>
  );
}
