import React, { Component } from "react";
import { Redirect } from "react-router";
import RightSide2 from "./RightSide2";
import PropTypes from "prop-types";

export default class EditKeg extends Component {
  constructor(props) {
    super(props);
    this._kegName = null;
    this._kegBrand = null;
    this._kegPrice = null;
    this.state = {
      redirect: false
    };
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleEditKegFormSubmission = this.handleEditKegFormSubmission.bind(
      this
    );
  }

  handleRedirect() {
    this.setState({ redirect: true });
  }

  handleEditKegFormSubmission(keg) {
    keg.preventDefault();
    this.props.onKegEdit({
      name: this._kegName.value,
      brand: this._kegBrand.value,
      price: parseInt(this._kegPrice.value)
    });
    this._kegName = "";
    this._kegBrand = "";
    this._kegPrice = "";
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect === false) {
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
              .bookingForm {
                background-color: #515151;
                width: 400px;
                height: 450px;
                border-radius: 5px;
                margin-left: 10%;
                margin-top: 2%;
                padding: 25px 25px 25px 25px;
              }

              .bookingForm h1 {
                color: white;
              }

              label {
                font-size: 12px;
                font-weight: bold;
                color: white;
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
          <RightSide2 />
          <form
            className="bookingForm"
            onSubmit={this.handleEditKegFormSubmission}
          >
            <h1>Edit {this.props.kegToEdit.keg.name}</h1>
            <label>NAME: </label>
            <br />
            <input
              className="name"
              id="name"
              type="text"
              placeholder="Name"
              defaultValue={this.props.kegToEdit.keg.name}
              required
              ref={input => {
                this._kegName = input;
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
              defaultValue={this.props.kegToEdit.keg.brand}
              required
              ref={input => {
                this._kegBrand = input;
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
              defaultValue={this.props.kegToEdit.keg.price}
              required
              ref={input => {
                this._kegPrice = input;
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
    } else {
      return <Redirect to="/keglist" />;
    }
  }
}

EditKeg.propTypes = {
  kegToEdit: PropTypes.object,
  name: PropTypes.string,
  onKegEdit: PropTypes.func
};
