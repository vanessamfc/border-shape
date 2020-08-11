import React, { useState } from "react";
import { Container, StyledBorder, StyledInput } from "./styles";

function Home() {
  const [topRadiusValue, setTopRadiusValue] = useState(50);
  const [rightRadiusValue, setRightRadiusValue] = useState(50);
  const [bottomRadiusValue, setBottomRadiusValue] = useState(50);
  const [leftRadiusValue, setLeftRadiusValue] = useState(50);
  console.log(bottomRadiusValue);
  return (
    <Container>
      <div>
        <StyledInput
          type="range"
          value={leftRadiusValue}
          min="0"
          max="100"
          onChange={(e) => {
            setLeftRadiusValue(parseInt(e.target.value));
          }}
        />
        <div>
          <StyledInput
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
          <StyledInput
            type="range"
            value={bottomRadiusValue}
            min="0"
            max="100"
            onChange={(e) => {
              setBottomRadiusValue(parseInt(e.target.value));
            }}
          />
        </div>
        <StyledInput
          type="range"
          value={rightRadiusValue}
          min="0"
          max="100"
          onChange={(e) => {
            setRightRadiusValue(parseInt(e.target.value));
          }}
        />
      </div>
      <div>
        border radius:
        <span>
          {topRadiusValue}% {100 - topRadiusValue}% {100 - bottomRadiusValue}%{" "}
          {bottomRadiusValue}% / {100 - leftRadiusValue}%{" "}
          {100 - rightRadiusValue}% {rightRadiusValue}% {leftRadiusValue}%
        </span>
      </div>
    </Container>
  );
}

export default Home;
