import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return <div>
    <MainNavigation/>
    <Outlet/>
  </div>;
};
