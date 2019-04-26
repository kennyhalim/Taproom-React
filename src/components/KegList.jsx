import React from "react";
import KegDetail from "./KegDetail";
import RightSide2 from "./RightSide2";
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
        .box1 {
          display: grid;
          grid-template-columns: 1fr;
          border: 1px solid black;
          height: 25vh;
          border-radius: 5px;
          margin-left: 80px;
          margin-right: 80px;
          margin-bottom: 30px;
          background: #1d175b;
          color: white;
          font-size: 28px;
        }
        .box1Content {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 100px;
          margin-left: 100px;
          margin-right: 100px;
        }
      `}</style>
      <RightSide2 />
      <div className="box1">
        <div className="box1Content">
          <h1>Keg's List</h1>
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
