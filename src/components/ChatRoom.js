import styled from "styled-components";
import LOGO from "../assets/images/logo_hatypo.png";
import FACETIME from "../assets/images/icon_facetime.png";
import CALL from "../assets/images/icon_call.png";
import MORE from "../assets/images/icon_more_features.png";
import ShowChat from "./ShowChat";

const ChatRoom = () => {
  return (
    <>
      <ChatRoomBox>
        <ChatRoomTop>
          <Logo src={LOGO}/>
          <CompanyBox>
            <CompanyName>Hatypo Studio</CompanyName>
            <PresentSituation>Mos Aditt Typing..</PresentSituation>
          </CompanyBox>
          <Addition>
            <AdditionalImg src={FACETIME}/>
            <AdditionalImg src={CALL}/>
            <AdditionalImg src={MORE}/>
          </Addition>
        </ChatRoomTop>
        <ShowChat />
      </ChatRoomBox>
    </>
  );
};

export default ChatRoom;

const ChatRoomBox = styled.div`
  width: 370px;
  height: 517px;
  background: white;
  border-radius: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ChatRoomTop = styled.div`
  display: flex;
  justify-content: center;
`

const Logo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  margin-top: 25px;
  margin-left: 10px;
`

const CompanyBox = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 15px;
`
const CompanyName = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 0;
`
const PresentSituation = styled.p`
  font-size: 11px;
  color: #83B6A5;
  font-weight: 600;
  margin-top: 5px;
`

const Addition = styled.div`
  width: 150px;
  display: flex;
  justify-content: end;
`
const AdditionalImg = styled.img`
  width: 15px;
  height: 15px;
  margin: 30px 10px 0 0;
`