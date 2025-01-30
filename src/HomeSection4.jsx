import React from "react";
import "./HomeSection4.css";
import { Avatar } from "@mui/material";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import WipeAnimation from "./animations/WipeAnimation";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import CounterSection from "./CounterSection";

const data = [
  { target: "73", title: "Successful", subtitle: "Transaction Monthly" },
  { target: "72", title: "Customer", subtitle: "Satisfaction Rate" },
  {
    target: "367",
    title: "Exquisite Properties",
    subtitle: "Ready for You Selection",
  },
];

function HomeSection4() {
  const profileSection = () => {
    return (
      <div className="profileSection_container">
        <div>
          <p
            style={{
              fontSize: "10px",
              color: "#7d7d7d",
            }}
          >
            At Golden Gate Properties, we offer more than  just real estate
            services; we provide an unparalleled  experience tailored to meet
            your needs and exceed your expectations.
            At Golden Gate Properties, we offer more than  just real estate
            services; we provide an unparalleled  experience tailored to meet
            your needs and exceed your expectations.
            At Golden Gate Properties, we offer more than  just real estate
            services; we provide an unparalleled  experience tailored to meet
            your needs and exceed your expectations.
          </p>
        </div>
        <div className="profileSection_avatar_container">
          <div className="profileSection_avatar">
            {[1, 2, 3, 4].map((item) => {
              return (
                <div key={item}>
                  <Avatar
                    style={{ width: "55px", height: "55px" }}
                    src="./profil.jpg"
                  />
                </div>
              );
            })}

            <div>
              <p
                style={{
                  fontSize: "10px",
                  color: "#7d7d7d",
                  marginLeft: "20px",
                }}
              >
                Meet Our
                <br /> Professional Team
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getCallusNowButton = () => {
    return (
      <section className="callusnow_section">
        <WipeAnimation
          children={
            <div className="callusnow_container">
              <div className="callusnow_icon">
                <PhoneInTalkOutlinedIcon
                  style={{ fontSize: "20px", fontWeight: "100" }}
                />
              </div>
              <div>
                <h3 className="callusnow_text">Contact Us Now</h3>
              </div>
            </div>
          }
          delay={1}
        />
      </section>
    );
  };

  const imagesSection = () => {
    return (
      <div className="rightImageSection_container">
        <img className="image" src="./foto.avif" alt="Images" />
        <div style={{ position: "absolute", top: "20px", right: "20px" }}>
          {getCallusNowButton()}
        </div>
        {getBottomContainer()}
      </div>
    );
  };

  const getBottomContainer = () => {
    return (
      <div className="bottom_container">
        <h2 style={{ color: "#fff", fontSize: "15px" }}>
          Building Your Dreams
        </h2>
        <div className="bottom_s_o_container">
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "end",
            }}
          >
            <div className="HelpOutlineOutlinedIcon">
              <HelpOutlineOutlinedIcon style={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="special_offer_container">
            <Avatar
              style={{ width: "55px", height: "55px", marginRight: "10px" }}
              src="./profil.jpg"
            />
            <div>
              <p style={{ fontSize: "2px", color: "#7d7d7d" }}>Special Offer</p>
              <h5 style={{ margin: "0px", fontWeight: "400" }}>
                Get The Consultation <br /> With Our Expert
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="hs4_m_c">
      <div className="left_container">
        +{profileSection()}{" "}
        <div>
          {data.map((item) => {
            return (
              <CounterSection
                target={item.target}
                title={item.title}
                subtitle={item.subtitle}
              />
            );
          })}
        </div>
      </div>
      <div>{imagesSection()}</div>
    </div>
  );
}

export default HomeSection4;
