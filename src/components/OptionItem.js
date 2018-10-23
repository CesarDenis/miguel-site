import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2000;
`;

const CloseButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: none;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 12px;
  width: 20px;

  &:before,
  &:after {
    content: '';
    background-color: ${props => props.theme.colors.greyMedium};
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    transform-origin: center center;
    transition: background-color 0.5s ease;
  }

  &:before {
    height: 2px;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    width: 100%;
  }

  &:after {
    height: 100%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    width: 2px;
  }

  &:hover {
    &:before,
    &:after {
      background-color: ${props => props.theme.colors.greyDark};
    }
  }
`;

const StyledItem = styled.div`
  position: relative;
  grid-area: ${props => props.area || 'auto'};
`;

const Inner = styled.div`
  background: ${props => props.theme.colors.bg};
  border-radius: 8px;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  padding: 16px 24px;
  position: relative;

  img {
    margin-bottom: 8px;
    width: 96px;
  }

  h4 {
    margin: 0;
    max-width: 145px;
  }

  @media (min-width: ${props => props.theme.breakpoint.sm}) {
    img {
      width: 112px;
    }
  }

  .info {
    display: none;
    padding-top: 24px;
  }

  ${props =>
    props.active &&
    css`
      box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 0.5);
      cursor: default;
      grid-area: auto;
      position: absolute;
      width: 100%;
      z-index: 2500;

      + ${Overlay}, ${CloseButton}, .info {
        display: block;
      }
    `};
`;

class OptionItem extends Component {
  propTypes = {
    children: PropTypes.element,
  };

  state = {
    active: false,
  };

  handleClose = e => {
    e.preventDefault();
    e.stopPropagation();
    const { active } = this.state;
    this.setState({ active: !active });
  };

  render() {
    const { children, area, ...rest } = this.props;
    const { active } = this.state;
    console.log(this.node);
    return (
      <StyledItem area={area}>
        <Inner
          {...rest}
          active={active}
          onClick={() => this.setState({ active: true })}
        >
          <CloseButton type="button" onClick={this.handleClose} />
          {children}
        </Inner>
        <Overlay onClick={this.handleClose} />
      </StyledItem>
    );
  }
}

export default OptionItem;
