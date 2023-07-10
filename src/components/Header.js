import styled from "styled-components";
import SHARE from "../assets/images/icon_share.svg";
import PLUS from "../assets/images/icon_plus.svg";
import SPREAD from "../assets/images/icon_spread.png";

const Header = () => {
  return (
    <>
      <HeaderBar>
        <IconBox>
          <CloseIcon/>
          <HideIcon/>
          <FullIcon/>
        </IconBox>
        <InputUrl/>
        <ActiveBox>
          <ActiveIcon src={SHARE} />
          <ActiveIcon src={PLUS} />
          <ActiveIcon src={SPREAD} />
        </ActiveBox>
      </HeaderBar>
    </>
  );
};

export default Header;

const HeaderBar = styled.div`
  background: white;
  width: 830px;
  height: 35px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  //margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const IconBox = styled.div`
  width: 60px;
  height: 10px;
  display: flex;
  margin-left: 20px;
`

const BasicIcon = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin-left: 6px;
`

const CloseIcon = styled(BasicIcon)`
  background: red;
`

const HideIcon = styled(BasicIcon)`
  background: #FFB800;
`

const FullIcon = styled(BasicIcon)`
  background: #00CF1C;
`

const InputUrl = styled.input`
  background: #DFDFDF;
  width: 450px;
  height: 20px;
  border: none;
  border-radius: 5px;
`

const ActiveBox = styled.div`
  width: 80px;
  height: 30px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  //background: blue;
`

const ActiveIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`