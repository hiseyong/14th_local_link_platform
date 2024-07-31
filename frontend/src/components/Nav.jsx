import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineUser, AiOutlineLogin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #009178;
    height: 120px; /* Updated height value */
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
    font-size: 30px;
`;

const NavIcon = styled.div`
    margin-bottom: 5px;
`;


export const Nav = () => {
    return (
        <NavContainer>
            <NavItem>
                <Link to="/aboutus">
                    <NavIcon>
                        <AiOutlineUser size={50} />
                    </NavIcon>
                </Link>
                <Link to="/aboutus">About Us</Link>
            </NavItem>
            <NavItem>
                <Link to="/">
                    <NavIcon>
                        <AiOutlineHome size={50} />
                    </NavIcon>
                </Link>
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/login">
                    <NavIcon>
                        <AiOutlineLogin size={50} />
                    </NavIcon>
                </Link>
                <Link to="/login">Login</Link>
            </NavItem>
        </NavContainer>
    );
};