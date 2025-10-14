// src/pages/Return.js
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Return() {
  const [params] = useSearchParams();

  useEffect(() => {
    console.log("Payment Response:", Object.fromEntries(params));
  }, [params]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Payment Status</h2>
      <p>
        Status: <b>{params.get("pp_ResponseMessage") || "Processing..."}</b>
      </p>
    </div>
  );
}
