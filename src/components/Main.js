import React from 'react';
import Category from "./Category";
import styled from "styled-components";
import Header from "./Header";
import {AllData, PinnedData} from "../assets/data/Data.js";
import ChatLists from "./ChatLists";
import ChatMembers from "./ChatMembers";

const Main = () => {
  return (
    <>
      <BackgroundBox>
        <Header />
      <ContainerBox>
        {/*<Header />*/}
        <Category />
        <ChatLists pinnedData={PinnedData} allData={AllData}/>
        <ChatMembers />
      </ContainerBox>
      </BackgroundBox>
    </>
  );
};

export default Main;

const BackgroundBox = styled.div`
  width: 100%;
  height: 100%;
  background: #E0E0E0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const ContainerBox = styled.div`
  //background-color: #F8F8F8;
  background: bisque;
  width: 830px;
  height: 583px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row; // 디폴트값이니 나중에 삭제
  border: 1px solid #E1E1E1;
`