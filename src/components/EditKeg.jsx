import React from "react";
import PropTypes from "prop-types";
import RightSide2 from "./RightSide2";

export default function EditKeg(props) {
  let _kegName = null;
  let _kegBrand = null;
  let _kegPrice = null;

  function handleEditKegFormSubmission(keg) {
    keg.preventDefault();
    props.onKegEdit({
      name: _kegName.value,
      brand: _kegBrand.value,
      price: parseInt(_kegPrice.value)
    });
    _kegName = "";
    _kegBrand = "";
    _kegPrice = "";
  }
  console.log(props);
  return (
    <div>
      <RightSide2 />
      <form className="bookingForm" onSubmit={handleEditKegFormSubmission}>
        <h1>Edit {props.kegToEdit.keg.name}</h1>
        <label>NAME: </label>
        <br />
        <input
          className="name"
          id="name"
          type="text"
          placeholder={props.kegToEdit.keg.name}
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
          placeholder={props.kegToEdit.keg.brand}
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
          placeholder={props.kegToEdit.keg.price}
          ref={input => {
            _kegPrice = input;
          }}
        />

        <div className="btnContainer">
          <button className="submitBtn" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

EditKeg.propTypes = {
  kegToEdit: PropTypes.object,
  name: PropTypes.string,
  onKegEdit: PropTypes.func
};
