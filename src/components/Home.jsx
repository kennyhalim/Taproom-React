import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <style jsx global>
        {`
          body {
            background: #28547a;
          }
        `}
      </style>

      <Link to="/keglist">
        <div className="keglist">Enter Site</div>
      </Link>
    </div>
  );
}
