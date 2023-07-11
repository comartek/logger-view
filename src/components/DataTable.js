import React, { useEffect, useState } from "react";
import { useLogAddedSubscription } from "../useLogAddedSubscription";
import LoggerItem from "./LoggerItem";

const TableData = ({ keyString }) => {
  const { data } = useLogAddedSubscription({ key: keyString });
  const [currentLogs, setCurrentLogs] = useState([]);

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
      </div>
    </>
  );
};

export default TableData;
