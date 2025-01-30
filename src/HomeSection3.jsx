import React from "react";
import "./HomeSection3.css";
import AscendAnimation from "./animations/AscendAnimation";
import WipeAnimation from "./animations/WipeAnimation";
import ExploreCard from "./ExploreCard";

const filters = [
  { id: 0, title: "Apartments" },
  { id: 1, title: "Villas" },
  { id: 2, title: "For Rent" },
];

const exploreDetails = [
  {
    id: 0,
    name: "Azure Heights Luxury Residence",
    location: "Dubai Marina",
    footerDetails: [
      { title: "Price", subtitle: "from $290K" },
      { title: "Installment Plan", subtitle: "for 10 years" },
      { title: "Initial Payment", subtitle: "$30,000" },
      { title: "Completion Date", subtitle: "09/2025" },
    ],
  },
  {
    id: 1,
    name: "Ramona Heights Auspicious Residence",
    location: "Dubai Toll Plaza",
    footerDetails: [
      { title: "Price", subtitle: "from $590K" },
      { title: "Installment Plan", subtitle: "for 15 years" },
      { title: "Initial Payment", subtitle: "$65,000" },
      { title: "Completion Date", subtitle: "05/2026" },
    ],
  },
  {
    id: 2,
    name: "Villa of Life",
    location: "Dubai Mall",
    footerDetails: [
      { title: "Price", subtitle: "from $880K" },
      { title: "Installment Plan", subtitle: "for 20 years" },
      { title: "Initial Payment", subtitle: "$100,000" },
      { title: "Completion Date", subtitle: "10/2028" },
    ],
  },
  {
    id: 3,
    name: "Azorte Dubai Millenium",
    location: "Dubai Millenium",
    footerDetails: [
      { title: "Price", subtitle: "from $990K" },
      { title: "Installment Plan", subtitle: "for 15 years" },
      { title: "Initial Payment", subtitle: "$50,000" },
      { title: "Completion Date", subtitle: "09/2027" },
    ],
  },
];

function HomeSection3() {
  const headerSection = () => {
    return (
      <div className="header_section_main_container">
        <AscendAnimation
          children={
            <div className="headerSection_title">
              <h1>Explore Our Property Portfolio</h1>
            </div>
          }
        />
        <div>
          <WipeAnimation
            children={
              <div className="filters_section_container">
                {filters.map((filter, index) => {
                  return (
                    <div
                      style={{
                        backgroundColor: index === 0 ? "#fff" : "transparent",
                        color: index === 0 ? "#222" : "#fff",
                        width: "70px",
                        display: "flex",
                        justifyContent: "center",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      <span>{filter.title}</span>
                    </div>
                  );
                })}
              </div>
            }
            duration={2}
            direction={"right"}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="homeSection3_main_container">
      {headerSection()}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {exploreDetails.map((data) => {
          return <ExploreCard details={data} />;
        })}
      </div>
    </div>
  );
}

export default HomeSection3;
