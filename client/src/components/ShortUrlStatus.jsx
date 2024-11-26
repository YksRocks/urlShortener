import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShortUrlStatus() {
  const { urlCode } = useParams();
  const [status, setStatus] = useState(null);

  const urlStatus = async () => {
    const res = await axios.post(`/api/status/${urlCode}`, urlCode);
    setStatus(res.data.url);
  };

  useEffect(() => {
    urlStatus();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "IST",
    });
  };

  const handleRedirect = () => {
    if (status?.longUrl) {
      window.location.href = status.longUrl;
    } else {
      alert("URL not available for redirection.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",

        padding: "16px",
      }}
    >
      <div
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "24px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Short URL Status
        </h1>
        {status ? (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span style={{ fontWeight: "500" }}>Created At:</span>
              <span>{formatDate(status.createdAt)}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span style={{ fontWeight: "500" }}>Last Accessed:</span>
              <span>{formatDate(status.updatedAt)}</span>
            </div>
            <button
              onClick={handleRedirect}
              style={{
                display: "block",
                margin: "16px auto 0",
                backgroundColor: "#4d55ba",
                color: "#ffffff",
                border: "none",
                borderRadius: "4px",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              Redirect to URL
            </button>
          </div>
        ) : (
          <p style={{ color: "#718096", textAlign: "center" }}>
            Loading status...
          </p>
        )}
      </div>
    </div>
  );
}

export default ShortUrlStatus;
