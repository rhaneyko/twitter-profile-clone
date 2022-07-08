import styled from 'styled-components';



export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  background: ${props => props.theme.colors.gray};
  border-radius: 50%;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: ${props => props.theme.colors.white};

    font-size: 14px;
    font-weight: bold;
  }

  span {
    color: ${props => props.theme.colors.gray};

    font-size: 14px;
  }
`;

export const FollowButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.twitter};
  
  padding: 6px 17px;

  border-radius: 25px;
  border: 1px solid ${props => props.theme.colors.twitter};
  :hover{
    background-color: ${props => props.theme.colors.twitterDarkHover};
  }
`;
