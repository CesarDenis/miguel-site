import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass';

import LogoRed from '../images/heart-red.svg';

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textInvert};

  a {
    color: ${props => props.theme.colors.accent};

    &:hover {
      color: ${props => props.theme.colors.greyDark};
    }
  }
`;

const Inner = styled(Box).attrs({
  px: '20px',
  py: '32px',
})``;

const Heart = styled.img`
  position: relative;
  top: 5px;
  width: 24px;
  transform: scale(0.9);
  animation: love 0.5s infinite linear alternate-reverse;
`;

const Footer = () => (
  <Wrapper>
    <Inner fontSize="16px">
      <Text fontWeight="500" textAlign="center">
        Feito com <Heart src={LogoRed} alt="Corração" /> pelo{' '}
        <a href="https://cesardenis.com" target="blank" rel="nofollow">
          Papai
        </a>
      </Text>
    </Inner>
  </Wrapper>
);

export default Footer;
