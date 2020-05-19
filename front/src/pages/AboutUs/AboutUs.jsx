import React from "react";
import LionImage from "../../images/lion.jpg";
import CircusMap from "../../components/Map/Map";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <>
      <h1 style={{ marginLeft: "40%" }}>About Us</h1>
      <img
        src={LionImage}
        alt="Holographic leon"
        height="400px"
        style={{ float: "right", marginLeft: "5px" }}
      />
      <section>
        <p>
          We are proud to be among the few pioneer circus companies who with the
          usage of the most up to date technologies stepped into a new, modern
          era of entertainment. <br /> While trying to preserve the core values
          of the well-known, traditional circus-experience, we open a window for
          you onto a equally magical future. A future, where there is no need to
          keep wild animals in cages as we employ the most modern holographic
          and hologram technology; where you can choose healthy alternatives of
          the traditional "circus-snacks"; where we try to live in harmony with
          the nature and adopt eco-friendly practises, solutions, like separate
          collection of recyclable waste, usage of recyclable materials, and
          getting energy from solar cells.{" "}
        </p>
        <p>
          Maybe you ask yourself: why is it called "Wild" if they don't have any
          wild animals? For us W.I.L.D. means:
          <ul>
            <li>W - wonder, worldwide</li>
            <li>I - imagination, innovation</li>
            <li>L - love, laugh</li>
            <li>D - dazzling, direction</li>
          </ul>
        </p>
      </section>
      <CircusMap />
      <section style={{ textAlign: "center" }}>
        <h2>Contact</h2>
        <p>Address: Neverland, 1818 Tomorrow Street 666.</p>
        <p>Phone: +36-70-181-1818</p>
        <p>Email: wildCircus@gmail.com</p>
      </section>
    </>
  );
};
export default AboutUs;
