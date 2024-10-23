import React from "react";
import { Helmet } from "react-helmet-async";

const Helmeted = ({ title }) => {
  return (
    <Helmet>
      <title> {title}</title>
    </Helmet>
  );
};

export default Helmeted;
