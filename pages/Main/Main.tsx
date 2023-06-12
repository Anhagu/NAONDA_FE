import React from "react";
import styled from "styled-components";
import MainSidebar from "./MainSidebar";
import KakaoMap from "@/src/Map/KakaoMap";
import LocalList from "./LocalList";

const Main = () => {
  return (
    <MainContainer>
      <MainSideBarContainer>
        <MainSidebar />
        <LocalList />
      </MainSideBarContainer>

      <KakaoMap />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100vw;

  position: absolute;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MainSideBarContainer = styled.div``;

export default Main;
