import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${props => props.theme.colors.twitter};
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.twitter};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) => props.theme.colors.twitterLightHover};
        
  }
`;
