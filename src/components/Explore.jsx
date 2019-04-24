import React from "react";

export default function Explore() {
  return (
    <div>
      <style jsx>{`
        h2 {
          margin-left: 78px;
          color: #515151;
        }
        .explore {
          margin-left: 78px;
          display: grid;
          grid-template-columns: 270px 270px 270px;
          grid-gap: 20px;
        }

        .col {
          border: 1px solid #ebebeb;
          width: 100%;
          height: 72px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border-radius: 5px;
          font-weight: bold;
          color: #515151;
          -webkit-box-shadow: 0px 1px 1px #f5f5f5;
          -moz-box-shadow: 0px 1px 1px #f5f5f5;
          box-shadow: 0px 1px 1px #f5f5f5;
        }

        img {
          height: 100%;
          width: 100px;
          float: left;
          margin-right: 15px;
        }
      `}</style>
      <h2>Explore Airbnb</h2>
      <div className="explore">
        <div className="col">
          <img src="https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg" />
          <p>Homes</p>
        </div>
        <div className="col">
          <img src="https://a0.muscache.com/4ea/air/v2/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg" />
          <p>Experiences</p>
        </div>
        <div className="col">
          <img src="https://a0.muscache.com/4ea/air/v2/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg" />
          <p>Restaurants</p>
        </div>
      </div>
    </div>
  );
}
