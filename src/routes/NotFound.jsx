import React from "react";
import { Helmet } from "react-helmet";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const NotFound = () => (
  <div>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <NotFoundPage title="Page Not Found" />
  </div>
);

export default NotFound;
