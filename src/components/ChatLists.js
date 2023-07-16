import styled from "styled-components";
import ChatList from "./ChatList";
import WRITE from "../assets/images/icon_write.png";

const ChatLists = (props) => {
  const PinnedData = props.pinnedData;
  const AllData = props.allData;
  return (
    <>
      <ChatListsBox>
        <MessageTop>
          <MessageTitle>Messages</MessageTitle>
          <WriteMessage src={WRITE}/>
        </MessageTop>
        <ChatSearchInput placeholder={" 🔍 Search..."}></ChatSearchInput>
        <InfoMessage>📌 Pinned Message</InfoMessage>
        <MessageLists>
          {PinnedData.map((data, index) => (
            <ChatList data={data} key={index} />
          ))}
        </MessageLists>
        <InfoMessage>💌 All Message</InfoMessage>
        <MessageLists>
          {AllData.map((data, index) => (
            <ChatList data={data} key={index} />
          ))}
        </MessageLists>
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
`

const MessageTop = styled.div`
  display: flex;
  padding: 20px 0 15px 0;
  justify-content: center;
`

const MessageTitle = styled.h3`
  color: #226BD8;
  font-size: 18px;
  font-weight: 750;
  margin: 3px 30px 0 0;
`

const WriteMessage = styled.img`
  width: 20px;
  height: 20px;
  margin: 4px 0 0 25px;
`

const ChatSearchInput = styled.input`
  background-color: #ECECEC;
  width: 170px;
  height: 25px;
  border-radius: 5px;
  border: none;
  margin-left: 13px;
  
  &::placeholder {
    color: #BDBDBD;
    font-size: 11px;
  }
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
  margin-top: 8px;
  margin-bottom: 0;
  width: 200px;
  height: 180px;
`