import React from "react";
import styles from "./index.css";

export default function IndexPage() {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "40%",
          transform: "translateX(-50%) translateY(-50%)",
          backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
          padding: "0 50px",
          borderRadius: "10px",
          fontSize: "8rem",
          color: "white",
          fontWeight: "bold"
        }}
      >
        BELFRY
      </div>
      <div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "60%",
            transform: "translateX(-50%) translateY(-50%)",
            letterSpacing: "1em",
            fontSize: "1rem",
            color: "grey",
            fontWeight: "bold"
          }}
        >
          WE BUILD APPS
        </div>
      </div>
    </div>
  );
}
