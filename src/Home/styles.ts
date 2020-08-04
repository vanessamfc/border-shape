import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  > input:first-child {
    -webkit-appearance: slider-vertical;
  }

  > input:last-child {
    -webkit-appearance: slider-vertical;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledBorder = styled.div<{
  top: number;
  right: number;
  bottom: number;
  left: number;
}>`
  height: 300px;
  width: 300px;
  color: #ff4;
  background: linear-gradient(to right, #4cb8c4, #3cd3ad);
  border-radius: ${(props) => props.top}% ${(props) => 100 - props.top}%
    ${(props) => 100 - props.bottom}% ${(props) => props.bottom}% /
    ${(props) => 100 - props.left}% ${(props) => 100 - props.right}%
    ${(props) => props.right}% ${(props) => props.left}%;
`;
