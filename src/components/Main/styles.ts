import styled, {css} from 'styled-components';
import {
  AiOutlineArrowLeft,
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineSearch
} from 'react-icons/ai';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid ${props => props.theme.colors.outline};
    border-right: 1px solid ${props => props.theme.colors.outline};
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.primary};

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid ${props => props.theme.colors.outline};

  > button {
    padding: 8px;
    border: none;

    outline: 0;
    cursor: pointer;

    background: none;

    &:hover {
      background: ${props => props.theme.colors.twitterDarkHover};
    }
  }
`;

export const ArrowLefIcon = styled(AiOutlineArrowLeft)`
  width: 24px;
  height: 24px;

  fill: ${props => props.theme.colors.twitter};
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
    color: ${props => props.theme.colors.white};
  }
  > span {
    font-size: 15px;
    color: ${props => props.theme.colors.gray};
  }
`;



export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: ${props => props.theme.colors.primary};
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.outline};

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

 const iconCSS = css`
   width: 31px;
   height: 31px;

   cursor: pointer;

   fill: ${props => props.theme.colors.gray};

   &:hover,
   &.active {
     fill: ${props => props.theme.colors.twitter};
   }
 `;

 export const HomeIcon = styled(AiOutlineHome)`
   ${iconCSS}
 `;
 export const SearchIcon = styled(AiOutlineSearch)`
   ${iconCSS}
 `;
 export const BellIcon = styled(AiOutlineBell)`
   ${iconCSS}
 `;
 export const EmailIcon = styled(AiOutlineMail)`
   ${iconCSS}
 `;
