import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <h1>Na! ONDA</h1>
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 5vh;

  position: absolute;
  z-index: 999;

  background-color: rgba(232, 231, 231, 0.5);

  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1{
    color: #fff;
    font-weight: 900;
    font-size: 2.2em;

    margin-left: 1em;
  }

  a{
    text-decoration: none;
  }
`;

export default Header;
