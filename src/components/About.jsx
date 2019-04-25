import React from "react";
import RightSideYoung from "./RightSideYoung";
import LeftSide from "./LeftSide";

export default function About() {
  return (
    <div>
      <style jsx>{`
        .testing {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid #ebebeb;
        }
        h1 {
          text-align: center;
        }
        .box1 {
          height: 15vh;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 5px;
        }
        .box2 {
          height: 10vh;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 5px;
          color: #515151;
        }
        .parentColumn {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .column {
          height: 30vh;
          margin: 2px 2px 2px 2px;
          text-align: center;
          font-size: 14px;
        }
        img {
          height: 70%;
          width: 50%;
          border-radius: 5px;
          margin-top: 5px;
        }
        h1 {
          font-size: 60px;
          color: #515151;
        }
      `}</style>
      <div className="testing">
        <div>
          <LeftSide />
        </div>
        <div>
          <RightSideYoung />
        </div>
      </div>
      <div className="box1">
        <h1>About Us</h1>
      </div>
      <div className="parentColumn">
        <div className="column">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <h4>Some Smart Fellow - Chief Executive Officer</h4>
          <p>
            Mr. Fellow attended Stanford University and graduated magna cum
            laude with a Masters in Business.
          </p>
        </div>
        <div className="column">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <h4>Some Smart Fellow - Chief Executive Officer</h4>
          <p>
            Mr. Fellow attended Stanford University and graduated magna cum
            laude with a Masters in Business.
          </p>
        </div>
        <div className="column">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <h4>Some Smart Fellow - Chief Executive Officer</h4>
          <p>
            Mr. Fellow attended Stanford University and graduated magna cum
            laude with a Masters in Business.
          </p>
        </div>
        <div className="column">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <h4>Some Smart Fellow - Chief Executive Officer</h4>
          <p>
            Mr. Fellow attended Stanford University and graduated magna cum
            laude with a Masters in Business.
          </p>
        </div>
        <div className="column">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <h4>Some Smart Fellow - Chief Executive Officer</h4>
          <p>
            Mr. Fellow attended Stanford University and graduated magna cum
            laude with a Masters in Business.
          </p>
        </div>
        <div className="column">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <h4>Some Smart Fellow - Chief Executive Officer</h4>
          <p>
            Mr. Fellow attended Stanford University and graduated magna cum
            laude with a Masters in Business.
          </p>
        </div>
      </div>
      <div className="box2">&copy;Copyright Mark & Kenny</div>
    </div>
  );
}
