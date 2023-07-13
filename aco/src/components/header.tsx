import React from "react";
import styled from "styled-components";

const MainHeader = styled.nav`
    width: 1080px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 10px 15px 10px 15px;
    // box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

    ul {
        list-style: none;
    }

    ul > li {
        display: inline-block;
        margin-right: 30px;
    }
`;

const Header = () => {
    return (
        <>
            <MainHeader>
                <h2>Ai Coordinator</h2>
                <ul>
                    <li> Recommand </li>
                    <li> My Cloth </li>
                    <li> Style </li>
                    <li> Q&A </li>
                </ul>
            </MainHeader>
        </>
    );
};

export default Header;
