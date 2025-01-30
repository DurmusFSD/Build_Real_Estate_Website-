import React from "react";
import RunningCounter from "./animations/RunningCounter";

function CounterSection({ target, title, subtitle }) {
  return (
    <div
      style={{ borderBottom: "1px solid rgb(209, 204, 204)", marginBottom:"40px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems:"center",
          justifyContent: "space-between",
          width: "40%",
          padding:"10px"
        }}
      >
        <div>
          <RunningCounter target={target} />
        </div>
        <div>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "400",
              margin: "0px",
            }}
          >
            {title}
          </h1>
          <h1 style={{ fontSize: "20px", fontWeight: "400", margin: "1px" }}>
            {subtitle}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CounterSection;
