import React from "react";
import KegDetail from "./KegDetail";
import RightSide2 from "./RightSide2";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function KegList(props) {
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

        .newKeg {
          display: flex;
          justify-content: space-around;
          color: #515151;
          border: 1px solid #515151;
          border-radius: 5px;
          margin-left: 510px;
          margin-right: 510px;
          padding-top: 10px;
          padding-bottom: 10px;
          margin-bottom: 80px;
        }
      `}</style>
      <RightSide2 />
      <div className="box1">
        <div className="box1Content">
          <h1>Keg's List</h1>
        </div>
      </div>
      <Link to="/NewKeg" style={{ textDecoration: "none" }}>
        <h3 className="newKeg">Add a new Keg</h3>
      </Link>
      <div className="grid">
        {Object.keys(props.kegs).map(function(kegId) {
          var keg = props.kegs[kegId];
          return (
            <div key={kegId}>
              <KegDetail
                name={keg.name}
                brand={keg.brand}
                price={keg.price}
                key={kegId}
              />
              <Link to="/editkeg">
                <button
                  onClick={() => {
                    props.onKegSelection({ keg }, { kegId });
                  }}
                >
                  Edit Keg
                </button>
              </Link>
              <button
                onClick={() => {
                  props.onKegDeletion({ kegId });
                }}
                type="button"
              >
                Delete Keg
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

KegList.propTypes = {
  kegs: PropTypes.object,
  onKegDeletion: PropTypes.func,
  onKegSelection: PropTypes.func
};
