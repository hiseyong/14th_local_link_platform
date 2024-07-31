import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #009178;
    padding: 20px;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 30px;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <Title>하나고등학교 지역연계 프로젝트</Title>
        </HeaderContainer>
    );
};