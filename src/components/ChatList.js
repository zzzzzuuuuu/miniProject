import styled from "styled-components";

const ChatList = (props) => {
  const { name, content, time, img } = props.data;
  console.log(props.data);
  return (
    <>
      <ChatPersonRoom>
        <ProfileImgBox src={img}></ProfileImgBox>
        <NameContentBox>
          <PersonName>{name}</PersonName>
          <MessageContent>{content}</MessageContent>
        </NameContentBox>
        {/*<PersonName>{name}</PersonName>*/}
        <TimeBox>
          <Time>{time}</Time>
          <MessageCount>1</MessageCount>
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
  //background: bisque;
`
const NameContentBox = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  flex-direction: column;
  //background: lightsalmon;
`
const TimeBox = styled.div`
  display: flex;
  width: 45px;
  height: 50px;
  flex-direction: column;
  align-items: end; // flex-direction을 column으로 했으니 align-items
  //margin-top: 0;
  //background: black;
  padding-right: 5px;
`

const PersonName = styled.h4`
  color: #444444;
  font-size: 12px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0;
`

const MessageContent = styled.p`
  color: #8F8F8F;
  font-size: 11px;
  font-weight: 650;
  margin-top: 0;
`

const Time = styled.p`
  color: #C4C4C4;
  font-size: 11px;
  margin-top: 0;
  margin-bottom: 0;
`

const MessageCount = styled.div`
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 100%;
  color: white;
  font-size: 5px;
  line-height: 10px;
  margin-top: 5px;
`