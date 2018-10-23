import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Options from '../components/Options';

import LogoWhite from '../images/heart-white.svg';
import Miguel from '../images/photo-miguel.jpg';

const Container = styled(Box).attrs({
  mx: 'auto',
  px: '20px',
})`
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoint.sm}) {
    max-width: ${props => props.theme.maxWidths.sm};
  }

  @media (min-width: ${props => props.theme.breakpoint.md}) {
    max-width: ${props => props.theme.maxWidths.md};
  }

  @media (min-width: ${props => props.theme.breakpoint.lg}) {
    max-width: ${props => props.theme.maxWidths.lg};
  }

  @media (min-width: ${props => props.theme.breakpoint.xl}) {
    max-width: ${props => props.theme.maxWidths.xl};
  }
`;

const Row = styled(Flex).attrs({
  mx: [0, '-20px'],
  flexWrap: 'wrap',
})``;

const Heart = styled.img`
  transform: scale(0.9);
  animation: love 0.5s infinite linear alternate-reverse;
`;

const Menu = styled(Flex).attrs({
  flexWrap: 'wrap',
  justifyContent: 'end',
})`
  a {
    color: ${props => props.theme.colors.textInvert};
    text-transform: uppercase;
    font-size: 0.777rem;
    font-weight: 700;

    &:not(:first-child) {
      display: none;
    }

    @media (min-width: ${props => props.theme.breakpoint.sm}) {
      &:not(:first-child) {
        display: inline;
        margin-left: 32px;
      }
    }
  }
`;

const Nav = styled(Flex).attrs({
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
})`
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  padding: 1.125rem 1rem;
  position: sticky;
  top: 0;
  z-index: 3000;

  > ${Container} {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Hero = styled(Flex)`
  background-image: ${props => props.theme.gradients.primary};
  color: ${props => props.theme.colors.textInvert};
  min-height: 386px;
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoint.sm}) {
    justify-content: start;
    min-height: 468px;
  }

  @media (min-width: ${props => props.theme.breakpoint.lg}) {
    text-align: left;

    h1 {
      font-size: 3.6rem;
    }
  }

  @media (min-width: ${props => props.theme.breakpoint.xl}) {
    h1 {
      font-size: 4.444rem;
    }
  }
`;

const Section = styled.div`
  background-color: ${props =>
    props.grey ? props.theme.colors.greyLight : props.theme.colors.bg};
  padding-top: 48px;
  padding-bottom: 48px;

  @media (min-width: ${props => props.theme.breakpoint.sm}) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const Photo = styled.img`
  border-radius: 20px;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.15);
  margin-top: -70px;
  max-width: 280px;
  position: relative;
  margin-bottom: 48px;

  @media (min-width: ${props => props.theme.breakpoint.sm}) {
    margin-top: -100px;
    max-width: 100%;
    height: auto;
  }

  @media (min-width: ${props => props.theme.breakpoint.sm}) {
    margin-top: -160px;
  }

  @media (min-width: ${props => props.theme.breakpoint.lg}) {
    margin-top: -300px;
    margin-bottom: 0;
  }
`;

const IndexPage = () => (
  <Layout>
    <Nav>
      <Container>
        <Heart src={LogoWhite} alt="Coração" />
        <Menu>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#para-onde">Para Onde</a>
          <a href="#como-doar">Como Ajudar</a>
        </Menu>
      </Container>
    </Nav>
    <Hero id="home" justifyContent="center" alignItems="center">
      <Container>
        <Box mx={['auto', 0]} width={['280px', 1, 1, 1 / 2]}>
          <h1>Oi, eu sou o Miguel. Você quer tc?</h1>
        </Box>
      </Container>
    </Hero>
    <Section id="sobre">
      <Container>
        <Row justifyContent="space-between">
          <Box
            width={[1, 1, 1, 1 / 2]}
            order={[1, 1, 1, 0]}
            pr={[0, 0, 0, '16px']}
          >
            <h5>Sobre mim</h5>
            <h2>Vou contar um pouco da minha História</h2>
            <p>
              Nullam sodales ligula quis massa mollis venenatis. Nulla egestas
              sit amet massa vel sodales. Sed placerat massa at massa lobortis
              interdum. Ut posuere in nibh tincidunt vehicula. Curabitur aliquam
              purus nec lorem viverra, eu rutrum lectus convallis. Donec ac
              ligula metus. Maecenas ultricies enim justo, non pellentesque dui
              mattis eu. Etiam mi massa, interdum at enim at, lobortis egestas
              odio.
            </p>
          </Box>
          <Box
            width={[1, 1, 1, 5 / 12]}
            pl={[0, 0, '16px']}
            css={{ textAlign: 'center' }}
          >
            <Photo src={Miguel} alt="Foto do Miguel usando oculos e sorrindo" />
          </Box>
        </Row>
      </Container>
    </Section>
    <Section id="para-onde" grey>
      <Container>
        <Row>
          <Box
            width={[1, 1, 1, 1 / 2]}
            order={[0, 0, 0, 1]}
            pl={[0, 0, 0, '16px']}
          >
            <h5>Para Onde</h5>
            <h2>Como usamos sua Doação</h2>
            <p>
              Nullam sodales ligula quis massa mollis venenatis. Nulla egestas
              sit amet massa vel sodales. Sed placerat massa at massa lobortis
              interdum. Ut posuere in nibh tincidunt vehicula. Curabitur aliquam
              purus nec lorem viverra, eu rutrum lectus convallis. Donec ac
              ligula metus. Maecenas ultricies enim justo, non pellentesque dui
              mattis eu. Etiam mi massa, interdum at enim at, lobortis egestas
              odio.
            </p>
          </Box>
          <Box width={[1, 1, 1, 1 / 2]} pr={[0, 0, 0, '16px']}>
            <img src="" alt="" />
          </Box>
        </Row>
      </Container>
    </Section>
    <Section id="como-doar">
      <Container>
        <Row alignItems="center">
          <Box width={[1, 1, 1, 1 / 2]} pr={[0, 0, 0, '16px']}>
            <h5>Como Ajudar</h5>
            <h3>Veja as opção de como você pode ajudar</h3>
            <p>
              Nullam sodales ligula quis massa mollis venenatis. Nulla egestas
              sit amet massa vel sodales. Sed placerat massa at massa lobortis
              interdum.
            </p>
          </Box>
          <Box width={[1, 1, 1, 1 / 2]} pl={[0, 0, 0, '16px']}>
            <Options />
          </Box>
        </Row>
      </Container>
    </Section>
    <Footer />
  </Layout>
);

export default IndexPage;
