import styled from "styled-components";
import ChatList from "./ChatList";
// import {DATA} from "../assets/Data.js";

const ChatLists = (props) => {
  const DATA = props.data;
  console.log(DATA); // 왜 undefined지?
  return (
    <>
      <ChatListsBox>
        <MessageTitle>Messages</MessageTitle> {/*// 메시지 박스 만들어서 수정하기 버튼이랑 같이 넣기*/}
        <ChatSearchInput></ChatSearchInput>
        <InfoMessage>📌 Pinned Message</InfoMessage>
        <MessageLists>
          {DATA.map((data, index) => (
            <ChatList data={data} key={index} />
          ))}
        </MessageLists>
        <InfoMessage>💌 All Message</InfoMessage>
        <MessageLists></MessageLists>
      </ChatListsBox>
    </>
  );
};

export default ChatLists;

const ChatListsBox = styled.div`
  width: 200px;
  height: 517px;
  background: white;
  border-radius: 10px;
  margin-left: 10px;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
`

const MessageTitle = styled.h3`
  color: #226BD8;
  margin-left: 23px;
`

const ChatSearchInput = styled.input`
  background-color: lightgray;
  width: 170px;
  height: 28px;
  border-radius: 5px;
  border: none;
  margin-left: 13px;
`

const InfoMessage = styled.p`
  font-size: 10px;
  color: #CCCCCC;
  font-weight: 600;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 0;
`

const MessageLists = styled.div`
  margin-top: 5px;
  margin-bottom: 0;
  width: 200px;
  height: 180px;
  background: lightpink;
  border: 1px solid #ccc;
`