import styled from 'styled-components';

import { css } from 'styled-components';
 
import {
  FaRegComment,
  FaRetweet,
} from 'react-icons/fa'

import {
  AiOutlineTwitter,
  AiFillHeart,
} from 'react-icons/ai'
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid ${props => props.theme.colors.outline};

  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;


  font-size: 13px;
  color: ${props => props.theme.colors.gray};

  >path{
    fill: ${props => props.theme.colors.gray}
  }
`;
 export const TwitterIcon = styled(AiOutlineTwitter)`
   width: 16px;
   height: 16px;

   margin-left: 35px;
   margin-right: 9px;
 `;
export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;

`;
export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${props => props.theme.colors.gray};

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;

  >strong{
    color: ${props => props.theme.colors.white};
    margin-right: 5px;
  }
  >span, time{
      color: ${props => props.theme.colors.gray};
      
    }
  >strong, span{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: ${props => props.theme.colors.gray};
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-top: 4px;
  color: ${props => props.theme.colors.white};
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: ${props => props.theme.colors.outline};
  border-radius: 14px;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const Icons = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   margin: 11px auto 0;
   width: 100%;

   @media (min-width: 330px){
     width: 63%;
   }

   >div{
     cursor: pointer;
     &hover{
       opacity: 0.7;
     }
   }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  >svg{
    margin-right: 5px;
  }

  &:nth-child(1){
    &, svg path {
      color: ${props => props.theme.colors.gray};
    }
  }

  &:nth-child(2){
    color: ${props => props.theme.colors.retweet};

    >svg path{
      fill: ${props => props.theme.colors.retweet};
    }
  }

  &:nth-child(3){
    color: ${props => props.theme.colors.like};

    >svg{
      fill: ${props => props.theme.colors.like};
    }
  }

`;

 const iconCSS = css`
    width: 19px;
    height: 19px;
 `;

 export const CommentIcon = styled(FaRegComment)`
 ${iconCSS}

 `;

 export const RetweetIcon = styled(FaRetweet)`
 ${iconCSS}

 `;

 export const LikeIcon = styled(AiFillHeart)`
 ${iconCSS}

 `;
