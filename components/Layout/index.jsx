import React from "react";
import Header from "../Header/index";

function index({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default index;
