import React from 'react';
import Category from "./Category";
import styled from "styled-components";
import Header from "./Header";
import {AllData, MembersData, PinnedData} from "../assets/data/Data.js";
import ChatLists from "./ChatLists";
import ChatMembers from "./ChatMembers";
import ChatRoom from "./ChatRoom";

const Main = () => {
  return (
    <>
      <BackgroundBox>
        <Header />
      <ContainerBox>
        <Category />
        <ChatLists pinnedData={PinnedData} allData={AllData}/>
        <ChatRoom />
        <ChatMembers members={MembersData} />
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
  align-items: center;
  flex-direction: column;
`

const ContainerBox = styled.div`
  background: #ECECEC;
  width: 900px;
  height: 535px;
  display: flex;
  border-radius: 0 0 10px 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid #E1E1E1;
`