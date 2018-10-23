import React from 'react';
import styled from 'styled-components';

import OptionItem from './OptionItem';

import Online from '../images/Online.svg';
import Pig from '../images/Pig.svg';
import Rocket from '../images/Rocket.svg';
import Share from '../images/Share.svg';

const StyledOptions = styled.div`
  display: grid;
  grid-gap: 30px 30px;
  grid-template-areas: 'pig' 'online' 'rocket' 'share';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 100%;
  margin-top: 32px;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoint.sm}) {
    grid-template-areas: 'pig .' 'pig online' 'rocket online' 'rocket share' '. share';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }

  @media (min-width: ${props => props.theme.breakpoint.lg}) {
    margin-top: 0;
  }
`;

const Options = () => (
  <StyledOptions>
    <OptionItem className="active" area="pig">
      <img src={Pig} alt="Icone de um cofre de porco" />
      <h4>Direto para a conta do Mig</h4>
      <div className="info">
        <p>
          Nullam sodales ligula quis massa mollis venenatis. Nulla egestas sit
          amet massa vel sodales. Sed placerat massa at massa lobortis interdum.
        </p>
      </div>
    </OptionItem>
    <OptionItem area="online">
      <img src={Online} alt="Icone de um computador e uma mão com um cartão" />
      <h4>Prefere pelo PagSeguro?</h4>
      <div className="info">
        <p>
          Nullam sodales ligula quis massa mollis venenatis. Nulla egestas sit
          amet massa vel sodales. Sed placerat massa at massa lobortis interdum.
        </p>
      </div>
    </OptionItem>
    <OptionItem area="rocket">
      <img src={Rocket} alt="Icone de um foquete" />
      <h4>Enviando para Caixinha Postal</h4>
      <div className="info">
        <p>
          Nullam sodales ligula quis massa mollis venenatis. Nulla egestas sit
          amet massa vel sodales. Sed placerat massa at massa lobortis interdum.
        </p>
      </div>
    </OptionItem>
    <OptionItem area="share">
      <img src={Share} alt="Icone de balão de conversa com um coração" />
      <h4>Ou compartilhe nas suas redes</h4>
      <div className="info">
        <p>
          Nullam sodales ligula quis massa mollis venenatis. Nulla egestas sit
          amet massa vel sodales. Sed placerat massa at massa lobortis interdum.
        </p>
      </div>
    </OptionItem>
  </StyledOptions>
);

export default Options;
