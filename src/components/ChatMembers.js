import styled from "styled-components";
import ChatMember from "./ChatMember";
import LOGO from "../assets/images/logo_hatypo.png"
import FILE from "../assets/images/icon_file.png";
import PHOTO from "../assets/images/icon_photo.png";
import VIDEO from "../assets/images/icon_video.png";
import FILES from "../assets/images/icon_other_files.png";

const ChatMembers = (props) => {
  const MembersData = props.members;
  console.log(MembersData);
  return (
    <>
      <MembersBox>
        <CompanyBox>
          <CompanyImg src={LOGO}/>
          <CompanyTitle>Hatypo Studio</CompanyTitle>
          <CompanyInfo>Create something New</CompanyInfo>
        </CompanyBox>
        <SubTitle>Members</SubTitle>
        <Members>
          <AddIcon><Center>+</Center></AddIcon>
          <AddPerson>Add Member</AddPerson>
        </Members>
        <MemberList>
          {MembersData.map((data, index) => (
            <ChatMember data={data} key={index}/>
          ))}
        </MemberList>
        <SubTitle>Attachments</SubTitle>
        <AttachmentsBox>
            <AttachImg src={FILE}/>
          <AttachTextBox>
            <AttachTitle>Document</AttachTitle>
            <AttachContent>129Files - 75MB</AttachContent>
          </AttachTextBox>
        </AttachmentsBox>
        <AttachmentsBox>
          <AttachImg src={PHOTO}/>
          <AttachTextBox>
            <AttachTitle>Photo</AttachTitle>
            <AttachContent>938Files - 17GB</AttachContent>
          </AttachTextBox>
        </AttachmentsBox>
        <AttachmentsBox>
          <AttachImg src={VIDEO}/>
          <AttachTextBox>
            <AttachTitle>Videos</AttachTitle>
            <AttachContent>96Files - 2.3GB</AttachContent>
          </AttachTextBox>
        </AttachmentsBox>
        <AttachmentsBox>
          <AttachImg src={FILES}/>
          <AttachTextBox>
            <AttachTitle>Document</AttachTitle>
            <AttachContent>171Files - 19GB</AttachContent>
          </AttachTextBox>
        </AttachmentsBox>
      </MembersBox>
    </>
  );
};

export default ChatMembers;

const MembersBox = styled.div`
  width: 200px;
  height: 517px;
  background: white;
  border-radius: 10px;
  margin-left: 10px;
`

const CompanyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 0;
`
const CompanyImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`
const CompanyTitle = styled.h3`
  margin-top: 8px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 0;
`
const CompanyInfo = styled.p`
  color: #C0C0C0;
  font-size: 11px;
  margin-top: 3px;
  margin-bottom: 0;
`
const SubTitle = styled.h4`
  font-size: 13.5px;
  margin: 13px 0 5px 20px;
  font-weight: 500;
`
const Members = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 22px;
`
const AddIcon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background: #DEDEDE;
  color: #2B74E0;
  font-weight: 600;
  font-size: 20px;
  margin-left: -45px;
`
const AddPerson = styled.p`
  color: #2B74E0;
  font-size: 12px;
  font-weight: 530;
  margin-left: 7px;
`

const MemberList = styled.div`
  width: 180px;
  height: 150px;
  margin-left: 10px;
  justify-content: center;
`

const AttachmentsBox = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -45px;
  margin-top: 0;
`
const AttachImg = styled.img`
  width: 18px;
  height: 18px;
  margin-top: 6px;
`
const AttachTextBox = styled.div`
  width: 80px;
  height: 33px;
  margin-left: 10px;
`
const AttachTitle = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: black;
  margin: 0;
`
const AttachContent = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #7F7F7F;
  margin-top: -1px;
  margin-bottom: 0;
`
