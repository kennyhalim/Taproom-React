import React from "react";

export default function Footer() {
  return (
    <div>
      <style jsx>
        {`
          .footer {
            color: white;
            position: absolute;
            right: 0;
            bottom: 0;
            text-align: right;
            font-size: 14px;
            margin-right: 30px;
            margin-bottom: 50px;
          }

          .footer:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        `}
      </style>
      <p className="footer">
        Over 300
        <br />
        unique homes in Oregon
      </p>
    </div>
  );
}
