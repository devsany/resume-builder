import React from "react";
import Title from "./Title";
import ShowSingleResume from "./ShowSingleResume";
import { PDFDownloadLink } from "@react-pdf/renderer";

const ViewSingleResume = () => {
  return (
    <div>
      <Title />
      <PDFDownloadLink document={<ShowSingleResume />} fileName="RESUME">
        {({ loading }) =>
          loading ? (
            <button className="button-41">Loading Document...</button>
          ) : (
            <button className="button-41">Download</button>
          )
        }
      </PDFDownloadLink>
      <ShowSingleResume />
    </div>
  );
};

export default ViewSingleResume;
