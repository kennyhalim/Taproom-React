import React from "react";
import RightSideYoung from "./RightSideYoung";
import LeftSide from "./LeftSide";
import Explore from "./Explore";

export default function SearchResults() {
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
          .testing {
            display: grid;
            grid-template-columns: 1fr 1fr;
            border-bottom: 1px solid #ebebeb;
          }

          button {
            width: 64px;
            height: 32px;
            background: white;
            border: 1px solid lightgray;
            border-radius: 5px;
            font-size: 14px;
            text-align: center;
            color: #515151;
            }
          }

          .buttons{
            padding-bottom: 10px;
            margin-top: 10px;
            border-bottom: 1px solid #ebebeb;
          }
          .box1 {
            margin-left: 78px;
            margin-right: 78px;
            height: 8vh;
            margin-top: 40px;
            color: #515151;
          }
          .box2 {
            margin-left: 78px;
            margin-right: 78px;
            height: 20vh;
            border-radius: 5px;
            margin-bottom: 5px;
          }
          .box3 {
            margin-left: 78px;
            margin-right: 78px;
            height: 4vh;
            border-radius: 5px;
            margin-bottom: 5px;
            color: #515151;
          }
          .parentColumn {
            margin-left: 78px;
            margin-right: 78px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }

          .column {
            height: 22vh;
            width: 20vw;
            margin: 2px 2px 2px 2px;
            text-align: center;
            font-size: 14px;
            border-radius: 5px;
            color: white;
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
          }
          img {
            height: 100%;
            width: 100%;
            border-radius: 5px;
          }
          .column h4 {
            margin-bottom: -10px;
          }
          .column p {
            margin-bottom: 30px;
          }

        `}
      </style>
      <div className="testing">
        <div>
          <LeftSide />
        </div>
        <div>
          <RightSideYoung />
        </div>
      </div>
      <div className="buttons">
        <button style={{ marginLeft: "80px" }}>Dates</button>
        <button style={{ marginLeft: "10px" }}>Guests</button>
      </div>
      <Explore />
      <div className="box1">
        <h2>Introducing AirBnB Plus</h2>
        <p>A selection of homes verified for quality and design</p>
      </div>
      <div className="box2">
        <img
          alt=""
          role="presentation"
          sizes="100vw"
          src="https://a0.muscache.com/4ea/air/v2/pictures/f4d72213-3cc2-403c-8482-0e2b7bb17b67.jpg?t=c:w800-h320,r:w800-h320-sfit,e:fjpg-c75"
          srcset="https://a0.muscache.com/4ea/air/v2/pictures/f4d72213-3cc2-403c-8482-0e2b7bb17b67.jpg?t=c:w800-h320,r:w800-h320-sfit,e:fjpg-c75 800w,https://a0.muscache.com/4ea/air/v2/pictures/f4d72213-3cc2-403c-8482-0e2b7bb17b67.jpg?t=c:w1600-h640,r:w1600-h640-sfit,e:fjpg-c75 1600w,https://a0.muscache.com/4ea/air/v2/pictures/f4d72213-3cc2-403c-8482-0e2b7bb17b67.jpg?t=c:w2400-h960,r:w2400-h960-sfit,e:fjpg-c75 2400w"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "left center"
          }}
        />
      </div>
      <div className="box3">
        <h2>Recommended for you</h2>
      </div>
      <div className="parentColumn">
        <div
          className="column"
          style={{
            backgroundImage: `url(
              "https://a0.muscache.com/im/pictures/998b4270-25d7-4850-8ccf-4350b9a5ab05.jpg?aki_policy=large"
            )`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div>
            <h4>Paris</h4>
            <p>$109/night average</p>
          </div>
        </div>
        <div
          className="column"
          style={{
            backgroundImage: `url(
              "https://a0.muscache.com/im/pictures/60145c65-7c36-4ac5-8129-6ae9a0d27a81.jpg?aki_policy=large"
            )`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div>
            <h4>Tokyo</h4>
            <p>$88/night average</p>
          </div>
        </div>
        <div
          className="column"
          style={{
            backgroundImage: `url(
              "https://a0.muscache.com/im/pictures/6729455e-af21-4dc3-bfdf-332393d407a8.jpg?aki_policy=large"
            )`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div>
            <h4>London</h4>
            <p>$122/night average</p>
          </div>
        </div>
        <div
          className="column"
          style={{
            backgroundImage: `url(
              "https://a0.muscache.com/im/pictures/82af5bc4-ed5b-44d9-9209-ac0f2fbf8986.jpg?aki_policy=large"
            )`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div>
            <h4>Los Angeles</h4>
            <p>$131/night average</p>
          </div>
        </div>
      </div>
    </div>
  );
}
