import styled from "styled-components";

const ChatMember = (props) => {
  const {name, img} = props.data;
  return (
    <>
      <MembersBox>
        <ProfileImgBox>
          <ProfileImg src={img}/>
        </ProfileImgBox>
        <NameBox>
          <MemberName>{name}</MemberName>
        </NameBox>
      </MembersBox>
    </>
  );
};

export default ChatMember;

const MembersBox = styled.div`
  display: flex;
  justify-content: center;
`

const ProfileImgBox = styled.div`
  width: 30px;
  height: 30px;
  //background: white;
  display: flex;
  flex-direction: column;
  margin-top: 1px;
  margin-left: -15px;
`
const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 5px;
`

const NameBox = styled.div`
  width: 120px;
  height: 30px;
  //background: bisque;
  display: flex;
  flex-direction: column;
  margin-top: 1px;
`
const MemberName = styled.p`
  font-size: 11.5px;
  color: black;
  font-weight: 450;
  margin-top: 5px;
  margin-left: 5px;
`