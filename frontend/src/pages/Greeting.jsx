import { SearchBar } from "../components/Search";
import { Title } from "../components/Texts";
import { ArrowAnimation } from "../components/ArrowAnimation";
import styled from "styled-components";

const TitleBox = styled.div`
    display: flex; /* 플렉스 박스를 활성화 */
    flex-direction: column; /* 세로로 나열 */
    align-items: flex-end; /* 가로 축에서 오른쪽 정렬 */
    justify-content: flex-end; /* 세로 축에서 아래쪽 정렬 (선택 사항) */
    text-align: right; /* 텍스트 정렬도 오른쪽으로 */
    width: 100%; /* 너비 100% */
    right: 0; /* 오른쪽 정렬 */
    top: 30vh; /* 위쪽 정렬 */
    position: absolute; /* 절대 위치 */
`;

export function Greeting() {
    return (
        <>
            <SearchBar />
            <TitleBox>
                <Title rx='10'>2024</Title>
                <Title rx='20'>지역연계</Title>
            </TitleBox>
            <ArrowAnimation bottom='20vh'/>
        </>
    );
}