import { motion } from "framer-motion";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./App.css";
function ExploreCard({ details }) {
  const headerSection = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: "350px" }}>
          <h2 style={{ fontSize: "22px" }}>{details.name}</h2>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            width: "30px",
            height: "30px",
            borderRadius: "46px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ArrowOutwardIcon
            style={{
              color: "#222",
              fontSize: "30px",
              textAlign: "center",
            }}
          />
        </div>
      </div>
    );
  };
  const footerSection = () => {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "4px 10px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            color: "#000",
            width: "180px",
            border: "1px solid #000",
            marginBottom: "10px",
          }}
        >
          <LocationOnOutlinedIcon
            style={{ marginRight: "5px", color: "#000", fontSize: "30px" }}
          />
          <p style={{ color: "#000", fontSize: "15px" }}>{details.location}</p>
        </div>
        <div style={{ display: "flex" }}>
          {details.footerDetails.map((item) => {
            return footerCard(item);
          })}
        </div>
      </div>
    );
  };
  const footerCard = (item) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "5px",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: "22px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          color: "#000",
          width: "120px",
          margin: "0px 5px",
        }}
      >
        <p>{item.title} </p>
        <h2>{item.subtitle}</h2>
      </div>
    );
  };

  return (
    <div
      style={{
        position: "relative",
        margin: "20px",
        width: "40vw",
        height: "92vh",
        borderRadius: "22px",
        overflow: "hidden",
        cursor: "url(icon.png), auto",
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.02,
          transition: { ease: "easeOut", duration: "0.3" },
        }}
      >
        <motion.img
          src="./img5.jpeg"
          alt="explore"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "22px",
          }}
        ></motion.img>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            color: "#fff",
            opacity: 0,
            padding: "20px",
            height: "100vh",
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div> {headerSection()}</div>
          <div className="footer-section"> {footerSection()}</div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ExploreCard;
