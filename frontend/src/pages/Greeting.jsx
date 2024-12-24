import { SearchBar } from "../components/Search";
import { Title } from "../components/Texts";
import { ArrowAnimation } from "../components/ArrowAnimation";
import styled from "styled-components";
import { BounceBall } from "../components/GreetingBackground";

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
const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* 배경처럼 뒤로 보내기 */
`;

const ContentWrapper = styled.div`
  position: relative; /* 기본 배치 */
  z-index: 1; /* BounceBall보다 앞에 오도록 설정 */
`;

export function Greeting({ translateX, opacity }) {
  return (
    <>
      {/* BounceBall을 배경으로 설정 */}
      <BackgroundWrapper>
        <BounceBall
          canvasWidth={window.innerWidth}
          canvasHeight={window.innerHeight}
        />
      </BackgroundWrapper>

      {/* 나머지 요소 */}
      <ContentWrapper>
        <TitleBox>
          <Title rx="10">2024</Title>
          <Title rx="20">지역연계</Title>
        </TitleBox>
        <ArrowAnimation bottom="20vh" />
      </ContentWrapper>
    </>
  );
}