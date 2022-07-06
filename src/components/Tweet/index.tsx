import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
} from './styles';

import {
  FaRegComment,
  FaRetweet,
} from 'react-icons/fa'

import {
  AiOutlineTwitter,
  AiFillHeart,
} from 'react-icons/ai'

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <AiOutlineTwitter />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rhaneyko</strong>
            <span>@rhaneyko</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Foguete não tem ré 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <FaRegComment />
              18
            </Status>
            <Status>
              <FaRetweet />
              18
            </Status>
            <Status>
              <AiFillHeart />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
