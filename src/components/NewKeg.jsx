import React from "react";
import RightSide from "./RightSide";
import PropTypes from "prop-types";

export default function NewKeg(props) {
  let _kegName = null;
  let _kegBrand = null;
  let _kegPrice = null;

  function handleNewKegFormSubmission(keg) {
    keg.preventDefault();
    props.onNewKegCreation({
      name: _kegName.value,
      brand: _kegBrand.value,
      price: parseInt(_kegPrice.value)
    });
    _kegName = "";
    _kegBrand = "";
    _kegPrice = "";
  }
  return (
    <div>
      <style jsx global>
        {`
          body {
            background: #28547a;
          }
        `}
      </style>
      <style jsx>
        {`
          .bookingForm {
            background-color: white;
            width: 400px;
            height: 450px;
            border-radius: 5px;
            margin-left: 10%;
            margin-top: 2%;
            padding: 25px 25px 25px 25px;
          }

          .bookingForm h1 {
            color: #484848;
          }

          label {
            font-size: 12px;
            font-weight: bold;
          }

          .name {
            height: 48px;
            width: 377px;
            font-size: 18px;
            padding: 0px 10px 0px 10px;
            margin-top: 5px;
          }

          .submitBtn {
            height: 48px;
            width: 100px;
            border-radius: 5px;
            background: #ff5a5f;
            color: white;
            font-size: 15px;
            font-weight: bold;
          }

          .submitBtn:hover {
            cursor: pointer;
          }

          .btnContainer {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
          }
        `}
      </style>
      <RightSide />
      <form className="bookingForm" onSubmit={handleNewKegFormSubmission}>
        <h1>Add a new Keg</h1>
        <label>NAME: </label>
        <br />
        <input
          className="name"
          id="name"
          type="text"
          placeholder="Name"
          ref={input => {
            _kegName = input;
          }}
        />
        <br />
        <br />
        <label>BRAND: </label>
        <br />
        <input
          className="name"
          type="text"
          placeholder="Brand"
          ref={input => {
            _kegBrand = input;
          }}
        />
        <br />
        <br />
        <label>PRICE:</label>
        <br />
        <input
          className="name"
          type="number"
          min="1"
          placeholder="Price"
          ref={input => {
            _kegPrice = input;
          }}
        />

        <div className="btnContainer">
          <button className="submitBtn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};
