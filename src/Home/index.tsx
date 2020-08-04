import React, { useState } from "react";

import { Container, StyledBorder } from "./styles";

function Home() {
  const [topRadiusValue, setTopRadiusValue] = useState(50);
  const [rightRadiusValue, setRightRadiusValue] = useState(50);
  const [bottomRadiusValue, setBottomRadiusValue] = useState(50);
  const [leftRadiusValue, setLeftRadiusValue] = useState(50);
  console.log(bottomRadiusValue);
  return (
    <Container>
      <input
        type="range"
        value={leftRadiusValue}
        min="0"
        max="100"
        onChange={(e) => {
          setLeftRadiusValue(parseInt(e.target.value));
        }}
      />
      <div>
        <input
          type="range"
          value={topRadiusValue}
          min="0"
          max="100"
          onChange={(e) => {
            setTopRadiusValue(parseInt(e.target.value));
          }}
        />
        <StyledBorder
          top={topRadiusValue}
          right={rightRadiusValue}
          bottom={bottomRadiusValue}
          left={leftRadiusValue}
        ></StyledBorder>
        <input
          type="range"
          value={bottomRadiusValue}
          min="0"
          max="100"
          onChange={(e) => {
            setBottomRadiusValue(parseInt(e.target.value));
          }}
        />
      </div>
      <input
        type="range"
        value={rightRadiusValue}
        min="0"
        max="100"
        onChange={(e) => {
          setRightRadiusValue(parseInt(e.target.value));
        }}
      />
    </Container>
  );
}

export default Home;
