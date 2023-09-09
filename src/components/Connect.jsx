import React from "react";
import "./connect.scss";
import { ContactUs } from "./ContactUs";

export default function Connect() {
  return (
    <div className="connect">
      <h1  align="center">Any Queries...🤔 </h1>

      <div className="form">
        <ContactUs/>
      </div>
    </div>
  );
}
