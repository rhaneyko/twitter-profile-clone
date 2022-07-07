import React from 'react';

import Feed from '../Feed';

import { Container,
   Banner, 
   Avatar, 
   ProfileData,
   Informations,
   UserName,
   AtSign,
   LocationData,
   BirthDate,
   Followage,
   EditButton,
   LocationIcon,
   CakeIcon,
      } from './styles';


const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
       <Informations>
        <UserName>Rhaneyko Honorio</UserName>
        <AtSign>@rhaneyko</AtSign>
       
         <p>Developer at <a href=''>Unimed Cuiabá</a></p>
          <LocationData>
            <LocationIcon 
              size={15}
              color='#FFF'
            />
            Cuiabá, Brasil
          </LocationData>
          <BirthDate>
            <CakeIcon
              size={15}
              color='#FFF'
            />
            Nascido(a) em 22 de abril de 2003
         </BirthDate>
       </Informations>

        <Followage>
          <span>
             <strong>321 </strong>seguindo
          </span>
          <span>
            <strong>517 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed/>
    </Container>
      
  );
}

export default ProfilePage;
