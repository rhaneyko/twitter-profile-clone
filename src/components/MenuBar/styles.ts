import styled, { css } from 'styled-components';

import {
  AiOutlineTwitter,
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineHeart,
  AiOutlineClose,
} from 'react-icons/ai';

import {
  RiUser3Fill
} from 'react-icons/ri'

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

 export const Logo = styled(AiOutlineTwitter)`
   width: 41px;
   height: 41px;

   > path {
     fill: ${props => props.theme.colors.twitter};
   }

   margin-bottom: 20px;
 `;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  
  width: 230px;
  height: 60px;

  border: none;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.twitterDarkHover};
  }

  &:hover,
  &.active {
    span,
    svg {
      color: ${props => props.theme.colors.twitter};
      fill: ${props => props.theme.colors.twitter};
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: ${props => props.theme.colors.white};
`;

 export const HomeIcon = styled(AiOutlineHome)`
   ${iconCSS}
 `;
 export const BellIcon = styled(AiOutlineBell)`
   ${iconCSS}
 `;
 export const EmailIcon = styled(AiOutlineMail)`
   ${iconCSS}
 `;
 export const FavoriteIcon = styled(AiOutlineHeart)`
   ${iconCSS}
 `;
 export const ProfileIcon = styled(RiUser3Fill)`
   ${iconCSS}
 `;

export const Botside = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: ${props => props.theme.colors.gray};
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: ${props => props.theme.colors.gray};
    }
  }
`;

 export const ExitIcon = styled(AiOutlineClose)`
   display: none;

   @media (min-width: 1280px) {
     display: inline-block;
     width: 25px;
     height: 25px;
     color: var(--white);
     margin-left: 30px;
     cursor: pointer;

     &:hover {
       > path {
         color: ${props => props.theme.colors.like};
       }
     }
   }
 `;
