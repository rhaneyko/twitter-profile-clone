import React from 'react';

import Feed from '../Feed';

import { Container,
   Banner, 
   Avatar, 
   ProfileData,
     Followage,
     EditButton  } from './styles';

import {
  BiCake
} from 'react-icons/bi'

import {
  GoLocation
} from 'react-icons/go'

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Rhaneyko Honorio</h1>
        <h2>@rhaneyko</h2>

        <p>
          Developer at <a href="">Unimed Cuiabá</a>
        </p>

        <ul>
          <li>
            <GoLocation />
            Cuiabá, Brasil
          </li>
          <li>
            <BiCake/>

             Nascido(a) em 22 de abril de 2003
          </li>
        </ul>

        <Followage>
          <span>
             <strong>210 </strong>seguindo
          </span>
          <span>
            <strong>500 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed/>
    </Container>
      
  );
}

export default ProfilePage;
