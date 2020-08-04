import React, { useState } from "react";

import { Container, StyledBorder } from "./styles";

function Home() {
  const [topRadiusValue, setTopRadiusValue] = useState("");
  const [rightRadiusValue, setRightRadiusValue] = useState("");
  const [bottomRadiusValue, setBottomRadiusValue] = useState("");
  const [leftRadiusValue, setLeftRadiusValue] = useState("");
  console.log(bottomRadiusValue);
  return (
    <Container>
      <input
        type="range"
        value={leftRadiusValue}
        min="0%"
        max="100%"
        onChange={(e) => {
          setLeftRadiusValue(e.target.value);
        }}
      />
      <div>
        <input
          type="range"
          value={topRadiusValue}
          min="0%"
          max="100%"
          onChange={(e) => {
            setTopRadiusValue(e.target.value);
          }}
        />
        <StyledBorder>bola</StyledBorder>
        <input
          type="range"
          value={bottomRadiusValue}
          min="0%"
          max="100%"
          onChange={(e) => {
            setBottomRadiusValue(e.target.value);
          }}
        />
      </div>
      <input
        type="range"
        value={rightRadiusValue}
        min="0%"
        max="100%"
        onChange={(e) => {
          setRightRadiusValue(e.target.value);
        }}
      />
    </Container>
  );
}

export default Home;
