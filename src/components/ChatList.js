import styled from "styled-components";

const ChatList = (props) => {
  const { name, content, time } = props.data;
  console.log(props.data);
  return (
    <>
      <ChatPersonRoom>
        <PersonName>{name}</PersonName>
        <MessageContent>{content}</MessageContent>
        <Time>{time}</Time>
      </ChatPersonRoom>
    </>
  );
};

export default ChatList;

const ChatPersonRoom = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
`

const PersonName = styled.h4`
  color: #444444;
`

const MessageContent = styled.p`
  color: #8F8F8F;
`

const Time = styled.p`
  color: #C4C4C4;
`