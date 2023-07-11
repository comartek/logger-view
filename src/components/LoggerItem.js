import React from "react";
import ReactJson from "react-json-view";

const LoggerItem = ({ time, logAdded }) => {
  const timeLog = new Date(time * 1000);
  return (
    <>
      <div style={{ paddingBottom: 20 }}>
        <p style={{ color: "gray", fontSize: "0.7rem" }}>
          {timeLog.toLocaleString()}
        </p>
        <ReactJson src={logAdded} theme={"harmonic"} />
      </div>
    </>
  );
};
export default LoggerItem;
