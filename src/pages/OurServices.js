import React from "react";
import Layout from "../Components/Layout/Layout";
import OurServices from "./OurServices/OurServices";

const ourservices = () => {
  return (
    <Layout>
      <OurServices />
    </Layout>
  );
};

export function Head() {
  return <title>Our Services | EFS Logistics KSA </title>;
}
export default ourservices;
