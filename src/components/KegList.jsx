import React from "react";
import { Link } from "react-router-dom";
import KegDetail from "./KegDetail";
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
      `}</style>
      <Link to="/">
        <h1>Keg List</h1>
      </Link>
      {masterKegList.map((keg, index) => (
        <KegDetail
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          key={index}
        />
      ))}
    </div>
  );
}
