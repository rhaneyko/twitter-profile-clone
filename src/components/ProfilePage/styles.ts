import styled, {css} from 'styled-components'; 

import {
  BiCake
} from 'react-icons/bi'

import {
  GoLocation
} from 'react-icons/go'


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; //Firefox
  ::-webkit-scrollbar{
    display: none;
  }
`;
export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: ${props => props.theme.colors.twitter};
  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.gray};
  border-radius: 50%;

  position: absolute;
  bottom: max( -60px, -10vw);
  left: 15px;
  `;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  p{
    color: ${props => props.theme.colors.white};

    font-size: 15px;
    margin-top: 11px;
  }

  a{
    color: ${props => props.theme.colors.white};
    text-decoration: underline;
  }
  
`;

export const Informations = styled.div`
   display: flex;
   flex-direction: column;
`;

export const UserName = styled.h1`
  color: ${props => props.theme.colors.white};

  font-weight: bold;
  font-size: 19px;
`;
export const AtSign = styled.h2`
  color: ${props => props.theme.colors.gray};
    
  font-weight: normal;
  font-size: 15px;
`;

export const LocationData = styled.p`
    margin-top: 5px;
    color: ${props => props.theme.colors.white};
`;
export const BirthDate = styled.p`
    margin-top: 5px;
    color: ${props => props.theme.colors.white};
`;

 const iconCSS = css`
    width: 20px;
    height: 20px;

    margin: 0 5px -5px 0;

    color: ${props => props.theme.colors.gray};
 `

 export const LocationIcon = styled(GoLocation)`
 ${iconCSS}`;
 export const CakeIcon = styled(BiCake)`
 ${iconCSS}`;

export const Followage = styled.div`
  display: flex;

  strong{
    font-size: 15px;
    color: ${props => props.theme.colors.white};
  }

  span{
    font-size: 15px;
    color: ${props => props.theme.colors.gray};
    margin: 5px;
  }

`;

export const EditButton = styled.button`
  position: absolute;
  top: 2vw;
  right: 7px;

  background-color: ${props => props.theme.colors.twitterDarkHover};
  color: ${props => props.theme.colors.twitter};

  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.twitter};
  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px){
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }

  &:hover{
    background-color: ${props => props.theme.colors.twitterDarkHover};

  }
`;
