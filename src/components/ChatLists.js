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
          {PinnedData.map((data, id) => (
            <ChatList data={data} key={id} />
          ))}
        </MessageLists>
        <InfoMessage>💌 All Message</InfoMessage>
        <MessageLists>
          {AllData.map((data, id) => (
            <ChatList data={data} key={id} />
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
  background: ${(props) => props.theme.colors.WHITE};
  border-radius: 10px;
  margin-left: 10px;
`

const MessageTop = styled.div`
  display: flex;
  padding: 20px 0 15px 0;
  justify-content: center;
`

const MessageTitle = styled.h3`
  color: ${(props) => props.theme.colors.BLUE};
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
  background-color: ${(props) => props.theme.colors.LIGHTGRAY};
  width: 170px;
  height: 25px;
  border-radius: 5px;
  border: none;
  margin-left: 13px;
  
  &::placeholder {
    color: ${(props) => props.theme.colors.MORE};
    font-size: 11px;
  }
`

const InfoMessage = styled.p`
  font-size: 10px;
  color: ${(props) => props.theme.colors.MORE};
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