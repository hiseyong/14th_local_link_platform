import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f8f8;
`;

const NotFoundTitle = styled.h1`
    font-size: 80px;
    color: #333;
    margin-bottom: 16px;
`;

const NotFoundSubtitle = styled.p`
    font-size: 40px;
    color: #666;
`;

const NotFoundLink = styled(Link)`
    font-size: 24px;
    color: #009178;
    text-decoration: none;
    margin-top: 16px;
`;

export const NotFound = () => {
    return (
        <NotFoundContainer>
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
            <NotFoundLink to="/">Go to Main Page</NotFoundLink>
        </NotFoundContainer>
    );
};