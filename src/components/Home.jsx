import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";

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
      <Navbar />
      <Form />
    </div>
  );
}
