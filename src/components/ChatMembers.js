import styled from "styled-components";
import ChatMember from "./ChatMember";

const ChatMembers = (props) => {
  const DATA = props.data;
  return (
    <>
      <MembersBox>
        <CompanyBox>
          <CompanyImg />
          <CompanyTitle>Hatypo Studio</CompanyTitle>
          <CompanyInfo>Create something New</CompanyInfo>
        </CompanyBox>
        <MembersTitle>Members</MembersTitle>
        <MemberList>
          <AddIcon>+</AddIcon>
          <AddPerson>Add Member</AddPerson>
          {/*map함수 쓰기*/}
          {/*{DATA.map((data, index) => {*/}
          {/*  <ChatMember data={data} key={index} />*/}
          {/*})}*/}
        </MemberList>
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
`
const CompanyImg = styled.div`
  width: 60px;
  height: 60px;
  background: #00A1FA;
  border-radius: 100%;
`
const CompanyTitle = styled.h3`
  margin-top: 10px;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 0;
`
const CompanyInfo = styled.p`
  color: #C0C0C0;
  font-size: 11px;
  margin-top: 5px;
  margin-bottom: 0;
`
const MembersTitle = styled.h4`
  font-size: 14px;
  margin: 15px 0 0 20px;
  font-weight: 500;
`
const MemberList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AddIcon = styled.div`
  // + 가운제 정렬 박스 새로 안 만들고 할 수 있는지 고민하기,,
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: #DEDEDE;
  color: #2B74E0;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
`
const AddPerson = styled.p`
  color: #2B74E0;
  font-size: 13px;
  font-weight: 530;
  margin-left: 7px;
`