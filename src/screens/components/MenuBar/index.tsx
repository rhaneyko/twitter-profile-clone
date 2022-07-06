import React from 'react'

import {
    Container,
    Menu,
    MenuButton,
} from './styles'

import {
    AiOutlineTwitter,
    AiOutlineHome,
    AiOutlineBell,
    AiOutlineMail,
    AiOutlineHeart,
    
} from 'react-icons/ai'

import {
    RiUserFill
} from 'react-icons/ri'

const MenuBar = () => {
    return(
        <Container>
            <AiOutlineTwitter size={20} color="#fff" />

            <Menu>
               <MenuButton>
                    <AiOutlineHome size={20} color="#fff" />
                    <span>Página Inicial</span>
                </MenuButton> 
                <MenuButton>
                        <AiOutlineBell size={20} color="#fff" />
                        <span>Notificações</span>
                </MenuButton>
                <MenuButton>
                        <AiOutlineMail size={20} color="#fff" />
                        <span>Mensagens</span>
                </MenuButton>
                <MenuButton>    
                        <AiOutlineHeart size={20} color="#fff" />
                        <span>Favoritados</span>
                </MenuButton>
                <MenuButton>
                        <RiUserFill size={20} color="#fff" />
                        <span>Perfil</span>
                </MenuButton>
            </Menu>
        </Container>
    )
}

export default MenuBar;
