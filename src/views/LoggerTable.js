import React, { useRef, useState } from "react";
import TableData from "../components/DataTable";
import { useKeyPress } from 'ahooks';

const LoggerTable = () => {
  const [keyString, setKeyString] = useState("");
  const [currentKey, setCurrentKey] = useState("");
  const [isListening, setIsListening] = useState(false);
  const inputRef = useRef();


  const handleChangKey = (key) => {
    setKeyString(key.target.value);
  };

  const handleListenLogger = () => {
    if (!keyString.trim().length) {
      return;
    }

    setIsListening(true);
    setCurrentKey(keyString);
  };

  const handleCancel = () => {
    window.document.getElementById("xxxxx").focus();
    // inputRef.current.focus();
    setIsListening(false);
  };

  useKeyPress(13, () => {
    if (isListening) {
      handleCancel()
    } else {
      handleListenLogger()
    }
  });

  

  return (
    <>
      <div className="section-logger">
        <div className="content-left">
          <h2 className="title">Logger view</h2>
          <input
            id="xxxxx"
            autoFocus
            ref={inputRef}
            disabled={isListening}
            placeholder="Enter your key !"
            onChange={handleChangKey}
            value={keyString}
          />
        </div>
        {!isListening ? (
          <button className="btn-btn" onClick={handleListenLogger}>
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
      <TableData keyString={currentKey} enabled={isListening}/>
    </>
  );
};

export default LoggerTable;
