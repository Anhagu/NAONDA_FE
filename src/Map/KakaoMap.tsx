import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Script from "next/script";
import styled from "styled-components";

const KakaoMap = () => {
  return (
    <KakaoMapContainer>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=67bd772eb010e2d9ab5bbd51586600ea&autoload=false"
        strategy="beforeInteractive"
      />
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "80vw", height: "100vh" }}
      >
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: 33.5563,
            lng: 126.79581,
          }}
        />
      </Map>
    </KakaoMapContainer>
  );
};

const KakaoMapContainer = styled.div`
  width: 75vw;
  height: 100%;

`;

export default KakaoMap;
