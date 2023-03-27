import React from "react";
import Header from "../../organisms/Header";
import { MainLayoutProps } from "./@types";

const MainLayout = ({ Children }: MainLayoutProps) => {
  return (
      <>
          <Header />
          {Children}
      </>
  );
};

export default MainLayout;