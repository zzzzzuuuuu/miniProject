import {useState} from "react";
import styled from "styled-components";
import PROFILE from "../assets/images/profile.png";
import Clock from 'react-live-clock';

const ShowChat = () => {
  const [text, setText] = useState('');
  const [chat, setChat] = useState([]);

  // input의 폼이 변경된 값 저장
  const handleChatInput = (e) => {
    setText(e.target.value);
  }
// 엔터키 눌렀을 때 전송
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitBtn();
    }
  }

  // 전송버튼 클릭시 input의 변경된 값을 chat에 저장하고 input 초기화
  const handleSubmitBtn = () => {
    const copyChat = [...chat]; // chat 배열 복사해서 copyChat에 할당
    if (text !== '') {
      copyChat.push(text);
      setChat(copyChat);
      setText('');
    }
  }

  return ( // 화면에 리턴되는 부분
    <>
      <ChattingRoom>
        <ChatDateBox>
          <ChatDate>Today</ChatDate>
        </ChatDateBox>
        <TalkBox>
          <YourProfile src={PROFILE}/>
          <OpponentBox>
            <TextInfo>
              <UserName>TestUser︎</UserName>
              <YourSendTime>PM 05:00 </YourSendTime>
            </TextInfo>
            <TextContentBox>안녕</TextContentBox>
          </OpponentBox>
        </TalkBox>
        <ShowChatList chatting={chat}/>
      </ChattingRoom>
      <SendBox>
        <WriteContentInput type="text" value={text} onChange={handleChatInput} onKeyPress={handleKeyPress} placeholder="Type a message"/>
        <SendButton onClick={handleSubmitBtn}>전송</SendButton>
      </SendBox>
    </>
  );
};

export default ShowChat;

const ChattingRoom = styled.div`
  background: #F0F0F0;
  width: 355px;
  height: 390px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`

const ChatDateBox = styled.div`
  background: white;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`
const ChatDate = styled.p`
  color: black;
  font-size: 12px;
  font-weight: 600;
`
const TalkBox = styled.div`
  width: 100%;
  height: max-content;
  margin-top: 10px;
  display: flex;
`
const TalkMyBox = styled(TalkBox)`
  justify-content: flex-end;
`
const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-top: 13px;
`
const YourProfile = styled(Profile)`
  margin-right: 5px;
  margin-left: 10px;
`
const MyProfile = styled(Profile)`
  margin-right: 10px;
  margin-left: 5px;
`
const OpponentBox = styled.div`
  width: 250px;
`
const MyBox = styled(OpponentBox)`
  justify-content: flex-end;
`
// 상대방 이름, 메세지 보낸 시간
const TextInfo = styled.div`
  display: flex;
  margin-bottom: 5px;
`
const MyTextInfo = styled(TextInfo)`
  justify-content: flex-end;
`
const UserName = styled.p`
  color: black;
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 0;
`
const SendTime = styled.p`
  color: black;
  font-size: 10px;
  font-weight: 400;
`
const YourSendTime = styled(SendTime)`
  margin: 10px 0 0 13px;
`
const MySendTime = styled(SendTime)`
  margin: 10px 13px 0 0;
`
const TextContentBox = styled.div`
  background: white;
  border-radius: 5px;
  border: none;
  width: max-content; 
  height: min-content;
  justify-content: center;
  font-size: 11px;
  font-weight: 500;
  padding: 4px;
  margin-top: 5px;
`
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`

const SendBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const WriteContentInput = styled.input`
  width: 303px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background: #F0F0F0;
  margin-top: 10px;
  margin-right: 3px;
  outline: none;
`
const SendButton = styled.button`
  width: 42px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background: #0071FF;
  color: white;
  margin-top: 10px;
  cursor: pointer;
`

// 사용자가 입력한 메시지를 출력함. chat이라는 state를 전달받음
const ShowChatList = ({chatting}) => {
  return (
    chatting.map((chat, i) => {
      return (
        // <span key={i}>
        <TalkMyBox>
          <MyBox>
            <MyTextInfo>
              <MySendTime>
                <Clock format={'A HH:mm'} ticking={false} timezone={"Asia/Seoul"}/>
              </MySendTime>
              <UserName>You</UserName>
            </MyTextInfo>
            <Right>
              <TextContentBox>{chat}</TextContentBox>
            </Right>
          </MyBox>
          <MyProfile src={PROFILE}/>
        </TalkMyBox>
        // </span>
      )
    })
  );
}