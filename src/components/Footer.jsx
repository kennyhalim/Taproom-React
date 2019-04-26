import React from "react";

export default function Footer() {
  return (
    <div>
      <style jsx>{`
        .footer p {
          color: white;
        }
        .footer a {
          color: white;
          text-decoration: none;
        }
        .footer a:hover {
          color: white;
          border-bottom: 2px solid white;
          padding-bottom: 8px;
        }
        .footer {
          position: absolute;
          right: 0;
          bottom: 0;
          margin-right: 20px;
          margin-bottom: 10px;
        }
      `}</style>
      <div className="footer">
        <p>
          <a href="https://www.github.com/kennyhalim">&copy; Kenny Halim</a>
        </p>
      </div>
    </div>
  );
}
