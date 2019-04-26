import React from "react";
import PropTypes from "prop-types";

export default function KegDetail(props) {
  return (
    <div>
      <style jsx>{`
        .box {
          border-radius: 5px;
          text-align: center;
          background: #d5cbc1;
          padding: 5px;
        }
        h1 {
          color: #515151;
        }
        h2 {
          color: #515151;
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
