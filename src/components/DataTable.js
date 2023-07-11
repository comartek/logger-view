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
    </>
  );
};

export default TableData;
