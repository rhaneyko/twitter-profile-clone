import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  ArrowLefIcon,
  ProfileInfo,
  HomeIcon,
  BellIcon,
  EmailIcon,
  SearchIcon,
  BottomMenu,
} from './styles';


const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <ArrowLefIcon/> 
        </button>

        <ProfileInfo>
          <strong>Rhaneyko Honorio</strong>
          <span>42.2K Tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />

      <BottomMenu>
        <HomeIcon className='active' />
        <SearchIcon />
        <BellIcon />
        <EmailIcon /> 
      </BottomMenu>
    </Container>
  );
};

export default Main;
