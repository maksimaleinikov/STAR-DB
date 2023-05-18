import React from "react";
import { ReactDOM } from "react";
import "./error-indicator.css";
const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="BOOM">BOOM</span>
      <span>something has gone wrong</span>
    </div>
  );
};

export default ErrorIndicator;
