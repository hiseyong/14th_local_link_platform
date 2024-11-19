import { SearchBar } from "../components/Search";
import { Title } from "../components/Texts";
import { ArrowAnimation } from "../components/ArrowAnimation";
import styled from "styled-components";

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: right;
  width: 100%;
  position: absolute;
  right: 0;
  top: 30vh;
`;

const GreetingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: ${(props) => `translateX(${props.translateX}px)`};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${(props) => props.opacity};
  z-index: 1;
`;

export function Greeting({ translateX, opacity }) {
  return (
    <GreetingContainer translateX={translateX} opacity={opacity}>
      <TitleBox>
        <Title rx="10">2024</Title>
        <Title rx="20">지역연계</Title>
      </TitleBox>
      <ArrowAnimation bottom="20vh" />
    </GreetingContainer>
  );
}