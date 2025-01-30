import React, { useEffect, useRef } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import RunningAnimation from "./animations/RunningAnimation";

function HomeSection2() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement.parentElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement.parentElement);
      }
    };
  }, []);

  const iconOutlineStyle = {
    backgroundColor: "black",
    padding: "8px",
    borderRadius: "12px",
    margin: "0px 10px",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        src="./video.mp4"
        muted={true}
        loop
        autoPlay
        style={{
          objectFit: "cover",
          width: "100%",
          height: "98vh",
          borderRadius: "22px",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          position: "absolute",
          top: "50px",
          left: "50%",
        }}
      >
        <div style={iconOutlineStyle}>
          <HomeOutlinedIcon style={{ color: "#fff", fontSize: "25px" }} />
        </div>
        <div style={iconOutlineStyle}>
          <KeyOutlinedIcon style={{ color: "#fff", fontSize: "25px" }} />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "0px",
          width: "100%",
        }}
      >
        <RunningAnimation
          text={
            "+ interest-free payment system with an initial payment from $25,000"
          }
          duration={15}
        />
      </div>
    </div>
  );
}

export default HomeSection2;
