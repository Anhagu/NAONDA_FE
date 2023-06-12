import React from "react";
import styled from "styled-components";

const MainSidebar = () => {
  return(
    <MainSidebarContainer>
      메인사이드
    </MainSidebarContainer>
  );
};

const MainSidebarContainer = styled.div`
  width: 20%;
  height: 100vh;

  position: relative;
  background-color: #F2921D;
`;

export default MainSidebar;