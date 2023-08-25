import React from "react";
import PageContent from "./PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
export const Error = () => {
  const error = useRouteError();
  let msg = "Something went wrong";
  let title = "An error occurred";
  if (error.status === 500) {
    msg = error.data.msg;
  }
  if (error.status === 404) {
    title = "not found";
    msg = "could not find resources";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{msg}</p>
      </PageContent>
    </>
  );
};
