import React from "react";
import "./HomeSection1.css";
import AscendAnimation from "./animations/AscendAnimation";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import WipeAnimation from "./animations/WipeAnimation";
import ScaleAnimation from "./animations/ScaleAnimation";
import ZoomInAnimation from "./animations/ZoomInAnimation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

function HomeSection1() {
  function getMyIcon(myIcon) {
    return <div className="getMyIconStyle">{myIcon}</div>;
  }

  function getLeftContainer() {
    return (
      <div className="home_section_left_container">
        <AscendAnimation
          children={
            <section className="header_section">
              <div className="header_section_logo">
                <img src="./logo.png" alt="app logo" />
              </div>
              <div className="myHeaderIcon_container">
                {getMyIcon(
                  <MapOutlinedIcon
                    className="myIcon"
                    style={{ fontSize: "30px", fontWeight: "100" }}
                  />
                )}
                {getMyIcon(
                  <FormatAlignRightIcon
                    className="myIcon"
                    style={{ fontSize: "30px" }}
                  />
                )}
              </div>
            </section>
          }
          delay={0.8}
        />
        <AscendAnimation
          children={
            <section className="middle_section">
              <p>Build Your Dreams</p>
              <h1>Real Estate in Dubai: Ideal For Living and Investing</h1>
            </section>
          }
          delay={1.2}
          duration={1}
        />
        <section className="callusnow_section">
          <WipeAnimation
            children={
              <div className="callusnow_container">
                <div className="callusnow_icon">
                  <PhoneInTalkIcon
                    style={{ fontSize: "20px", fontWeight: "100" }}
                  />
                </div>
                <div>
                  <h3 className="callusnow_text">Contact Us Now</h3>
                </div>
              </div>
            }
            delay={2}
          />

          {/*  */}
          <ScaleAnimation
            children={
              <div className="explore_all_container">
                <div style={{ width: "120px" }}>
                  <p>Explore All Our Properties</p>
                </div>
                <div className="explore_all_image_container">
                  <div className="explore_all_image">
                    <img src="./img1.jpg" alt="img" />
                  </div>
                  <div className="arrow_outward_icon">
                    <ArrowOutwardIcon
                      style={{
                        color: "#222",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                </div>
              </div>
            }
            delay={1}
            duration={1.2}
          />
        </section>
      </div>
    );
  }

  function getRightContainer() {
    return (
      <div className="home_section_right_container">
        <ZoomInAnimation src={"./img2.jpg"} />
        {getRightHeader()}
        {getMiddleContainer()}
      </div>
    );
  }

  function getRightHeader() {
    return (
      <div className="getRightHeader_container">
        <AscendAnimation
          children={
            <div>
              <p className="right_header_titles">
                More than 1500 real <br /> estate properties
              </p>
            </div>
          }
        />
        <AscendAnimation
          children={
            <div>
              <p className="right_header_titles">
                From $145,000 with a <br /> yield of 10% per annum
              </p>
            </div>
          }
        />

        <ScaleAnimation
          children={
            <div style={{ display: "flex" }}>
              <div
                style={{
                  border: "1px solid #fff",
                  padding: "10px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "10px",
                }}
              >
                <FavoriteBorderIcon style={{ fontSize: "18px" }} />
              </div>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <HomeOutlinedIcon style={{ color: "#000", fontSize: "22px" }} />
              </div>
            </div>
          }
        />
      </div>
    );
  }

  function getMiddleContainer() {
    return (
      <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
        <ScaleAnimation
          children={
            <div className="getMiddleContainer">
              <div>
                <h3>Catalog Download</h3>
              </div>
              <div
                style={{
                  backgroundColor: "lightgray",
                  borderRadius: "12px",
                  padding: "8px",
                }}
              >
                <FileDownloadOutlinedIcon style={{ fontSize: "15px" }} />
              </div>
            </div>
          }
        />
      </div>
    );
  }

  return (
    <div className="home_section_main_container">
      {getLeftContainer()}
      {getRightContainer()}
    </div>
  );
}

export default HomeSection1;
