import React from "react";
import PropTypes from "prop-types";

export default function KegDetail(props) {
  return (
    <div>
      <style jsx>{`
        .box {
          border: 1px solid black;
          border-radius: 5px;
          background: lightblue;
          text-align: center;
          margin-left: 30vw;
          margin-right: 30vw;
        }
      `}</style>
      <div className="box">
        <h1>{props.name}</h1>
        <h2>{props.brand}</h2>
        <h2>${props.price}</h2>
      </div>
    </div>
  );
}

KegDetail.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number
};
