import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  ProfileInfo,
  BottomMenu,
} from './styles';

import {
  AiOutlineArrowLeft,
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineSearch
} from 'react-icons/ai';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <AiOutlineArrowLeft 
          size={24}
          color='#33A1F2'
          /> 
        </button>

        <ProfileInfo>
          <strong>Rhaneyko Honorio</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />

      <BottomMenu>
        <AiOutlineHome className="active" />
        <AiOutlineSearch />
        <AiOutlineBell />
        <AiOutlineMail /> 
      </BottomMenu>
    </Container>
  );
};

export default Main;
