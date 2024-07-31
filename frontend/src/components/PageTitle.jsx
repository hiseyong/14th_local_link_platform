import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    /* Your title styles here */
`;

export const PageTitle = ({ children }) => {
    return (
        <TitleContainer>
            <Title>{children}</Title>
        </TitleContainer>
    );
};