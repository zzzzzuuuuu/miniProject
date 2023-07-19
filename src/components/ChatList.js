import styled from "styled-components";

const ChatList = (props) => {
  const { name, content, time, img, count } = props.data;
  return (
    <>
      <ChatPersonRoom>
        <ProfileImgBox src={img}></ProfileImgBox>
        <NameContentBox>
          <PersonName>{name}</PersonName>
          <MessageContent>{content}</MessageContent>
        </NameContentBox>
        <TimeBox>
          <Time>{time}</Time>
          {count && <MessageCount><Center>{count}</Center></MessageCount>}
        </TimeBox>
      </ChatPersonRoom>
    </>
  );
};

export default ChatList;

const ChatPersonRoom = styled.div`
  display: flex;
  width: 200px;
  height: 45px;
`
const ProfileImgBox = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  flex-direction: column;
  padding: 0 8px 5px 10px;
`
const NameContentBox = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  flex-direction: column;
`
const TimeBox = styled.div`
  display: flex;
  width: 45px;
  height: 50px;
  flex-direction: column;
  align-items: end;
  padding-right: 5px;
`

const PersonName = styled.h4`
  color: ${(props) => props.theme.colors.NAME};
  font-size: 12px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0;
`

const MessageContent = styled.p`
  color: ${(props) => props.theme.colors.CONTENT};
  font-size: 11px;
  font-weight: 650;
  margin-top: 0;
`

const Time = styled.p`
  color: ${(props) => props.theme.colors.TIME};
  font-size: 11px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
`

const MessageCount = styled.div`
  width: 10px;
  height: 10px;
  background: ${(props) => props.theme.colors.RED};
  border-radius: 100%;
  color: ${(props) => props.theme.colors.WHITE};
  font-size: 10px;
  font-weight: 700;
  line-height: 10px;
  margin-top: 5px;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`