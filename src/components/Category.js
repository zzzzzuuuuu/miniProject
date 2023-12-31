import styled from "styled-components";
import CALL from "../assets/images/icon_call.png";
import CAMERA from "../assets/images/icon_camera.png";
import MESSAGE from "../assets/images/icon_message.png";
import MORE from "../assets/images/icon_more.png";
import PHONEBOOK from "../assets/images/icon_phonebook.png";
import SETTING from "../assets/images/icon_setting.png";
import ME from "../assets/images/profile.png";

const Category = () => {
  return (
    <>
      <CategoryBox>
        <IconBox>
          <CategoryIcon src={CALL}/>
        </IconBox>
        <SelectedIconBox>
          <CategoryIcon src={MESSAGE}/>
        </SelectedIconBox>
        <IconBox>
          <CategoryIcon src={PHONEBOOK}/>
        </IconBox>
        <IconBox>
          <CategoryIcon src={CAMERA}/>
        </IconBox>
        <IconBox>
          <CategoryIcon src={MORE}/>
        </IconBox>
        <IconBox>
          <CategoryIcon src={SETTING}/>
        </IconBox>
        <MyProfileImg src={ME} />
      </CategoryBox>
    </>
  );
};

export default Category;

const CategoryBox = styled.div`
  background-color: ${(props) => props.theme.colors.WHITE};
  width: 80px;
  height: 517px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 12px;
`
const SelectedIconBox = styled(IconBox)`
  background: ${(props) => props.theme.colors.BLUE};

`

const CategoryIcon = styled.img`
  width: 25px;
  height: 25px;
`

const MyProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 105px;
`