import React from "react";
import { Link } from "react-router-dom";
import KegDetail from "./KegDetail";
import RightSide from "./RightSide";
const masterKegList = [
  {
    name: "testName",
    brand: "testBrand",
    price: 5
  },
  {
    name: "testName2",
    brand: "testBrand2",
    price: 6
  },
  {
    name: "testName3",
    brand: "testBrand3",
    price: 7
  }
];

export default function KegList() {
  return (
    <div>
      <style jsx>{`
        h1 {
          text-align: center;
        }
        .kegListNav .first p {
          color: #515151;
        }
        .kegListNav .first p:hover {
          border-bottom: 2px solid #515151;
        }
        .box1 {
          display: grid;
          grid-template-columns: 1fr;
          border: 1px solid black;
          height: 25vh;
          border-radius: 5px;
          margin-left: 80px;
          margin-right: 80px;
          margin-bottom: 30px;
        }
        .box1Content {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 10px;
          margin-left: 80px;
          margin-right: 80px;
        }
      `}</style>
      <div className="kegListNav">
        <RightSide />
      </div>
      <div className="box1">
        <div className="box1Content">
          <h1>The Keg</h1>
        </div>
      </div>
      <div className="grid">
        {masterKegList.map((keg, index) => (
          <KegDetail
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
