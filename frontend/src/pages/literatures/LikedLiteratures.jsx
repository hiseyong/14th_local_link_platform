import { Article } from "../../components/Article"
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PaperContainer = styled.div`
    padding: 16px;
    overflow-y: scroll;
    height: 80%;
`;

export function LikedLiteratures() {
    const client = axios.create();
    const [initialID, setInitialID] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("likedArticles")) {
            try {
                const parsedList = JSON.parse(localStorage.getItem("likedArticles")); // 문자열화된 리스트를 객체로 변환
                setInitialID(parsedList); // 변환된 객체를 상태
            } catch (error) {
                console.error("로컬스토리지 데이터 파싱 실패:", error);
                setInitialID([]); // 파싱 실패 시 기본값 설정
            }
        } else {
            setInitialID([]); // 로컬스토리지에 값이 없을 때 기본값 설정
        }
    }, []);

    useEffect(()=>{
        client.get('http://localhost:8000/paperListAll')
        .then((response) => {
            console.log(response);
            setArticles(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
    },[])

    return (
        <PaperContainer>
            {
                articles.map((article) => {
                    if (initialID.includes(article.id)) return <Article title={article.title} authors={article.authors} affiliation={article.type} keywords={article.keywords} id={article.id} initialLike={initialID.includes(article.id)} abstract={article.abstract} />

                })
            }
        </PaperContainer>
    )
}