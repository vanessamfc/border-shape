import styled from "styled-components";
import background from "../assets/backgroundImg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &::after {
    content: "";
    background-image: url(${background});
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-size: cover;
  }
  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    > input {
      transform: rotate(-90deg);
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > input {
        -webkit-appearance: slider-vertical;
        appearance: none;
        background: #3cd3ad;
        border-radius: 10px;
        height: 10px;
        margin: 10px;
      }
    }
  }
  > div:last-child {
    font-weight: bold;
    background-color: #ff878d;
    color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 50px;

    box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.25);
    > span {
      font-weight: bold;
      margin-left: 5px;
    }
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
  background: linear-gradient(to right, #4cb8c4, #3cd3ad);
  border-radius: ${(props) => props.top}% ${(props) => 100 - props.top}%
    ${(props) => 100 - props.bottom}% ${(props) => props.bottom}% /
    ${(props) => 100 - props.left}% ${(props) => 100 - props.right}%
    ${(props) => props.right}% ${(props) => props.left}%;
`;

export const StyledInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: #3cd3ad;
  border-radius: 10px;
  height: 10px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #fff;
    box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`;
