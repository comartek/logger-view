import React, { useEffect, useRef, useState } from "react";
import { useLogAddedSubscription } from "../useLogAddedSubscription";
import LoggerItem from "./LoggerItem";

const TableData = ({ keyString, enabled }) => {
  const { data } = useLogAddedSubscription({ key: keyString, enabled });
  const [currentLogs, setCurrentLogs] = useState([]);
  
  const runningKey = useRef(keyString)

  useEffect(() => {
    if (enabled && runningKey.current !== keyString) {
      runningKey.current = keyString;
      setCurrentLogs([]);
    }
  }, [enabled, keyString])

  useEffect(() => {
    if (!data) {
      return;
    }
    setCurrentLogs([data, ...currentLogs]);
  }, [data]);

  useEffect(() => {
    setCurrentLogs([]);
  }, [keyString]);

  const handleClear = () => {
    setCurrentLogs([]);
  }

  return (
    <>
      <div className="section-logger-items">
        {currentLogs?.map((item, index) => (
          <LoggerItem
            logAdded={item?.logAdded}
            time={item?.logAdded?.__logTime__}
            key={index}
          />
        ))}
        {
          !currentLogs.length && (
            <div className="empty-state">
              No data
            </div>
          )
        }
      </div>
      {
          !!currentLogs.length && (
            <div className="clear-button" onClick={handleClear}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={20}>
                <path fill="#ffffff" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
              </svg>
            </div>
          )
        }
    </>
  );
};

export default TableData;
