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
        }
        .footer a:hover {
          color: white;
        }
        .footer {
          position: absolute;
          right: 0;
          bottom: 0;
          margin-right: 20px;
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
