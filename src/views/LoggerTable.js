import React, { useState } from "react";
import TableData from "../components/DataTable";

const LoggerTable = () => {
  const [keyString, setKeyString] = useState("");
  const [currentKey, setCurrentKey] = useState("");

  const handleChangKey = (key) => {
    setKeyString(key.target.value);
  };

  const handleSubmit = () => {
    setCurrentKey(keyString);
  };
  const handleCancel = () => {
    setCurrentKey("");
    setKeyString("");
  };

  return (
    <>
      <div className="section-logger">
        <div className="content-left">
          <h2 className="title">Logger view</h2>
          <input
            placeholder="Enter your key !"
            onChange={handleChangKey}
            value={keyString}
          />
        </div>
        {!currentKey ? (
          <button className="btn-btn" onClick={handleSubmit}>
            <svg width="25" height="25" viewBox="3.5,4.5,24,24">
              <path d="M 11 9 L 24 16 L 11 23 z"></path>
            </svg>
          </button>
        ) : (
          <button className="btn-btn btn-red" onClick={handleCancel}>
            <svg width="25" height="25" viewBox="4.5,4.5,24,24">
              <rect
                fill="#edecec"
                x="10"
                y="10"
                width="13"
                height="13"
                rx="1"
              ></rect>
            </svg>
          </button>
        )}
      </div>
      <TableData keyString={currentKey} />
    </>
  );
};

export default LoggerTable;
