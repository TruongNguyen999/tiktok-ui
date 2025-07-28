import React from "react";
import Sidebar from "./Sidebar";
import Actionbar from "./Actionbar";
import { Wrapper } from "./DefaultLayout.styled";

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      {children}
      <Actionbar />
    </Wrapper>
  );
};

export default DefaultLayout;
