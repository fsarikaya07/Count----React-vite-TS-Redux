import styled from "styled-components";
import { ButtonProps } from "../types/types";
export const NavContainer = styled.div`
  height: 5rem;
  width: 100%;
  background-color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(49, 121, 34);
  background: linear-gradient(
    90deg,
    rgba(49, 121, 34, 1) 13%,
    rgba(152, 228, 250, 1) 33%,
    rgba(7, 67, 115, 1) 71%
  );
`;
export const NavHeading = styled.h1`
  color: #fff;
`;

export const CounterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
`;



export const CounterButton = styled.button<ButtonProps>`
    width: 3rem;
    font-size: 1rem;
    color: white;
    background: #0099ff;
    border: none;
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`
export const CounterResult = styled.p`
    font-size: 2rem;
    font-weight: 600;
`