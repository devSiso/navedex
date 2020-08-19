import styled, { css } from 'styled-components';

import { BlackTexts, White } from '@assets/styles/colors';
import { ButtonTp } from '@assets/styles/typography'

const themes = {
  dark: {
    color: White,
    background: BlackTexts
  },
  light: {
    color: BlackTexts,
    background: White
  }
};

export const DefaultButton = styled.button`
  ${ButtonTp};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => themes[props.theme].color} ;
  padding: 8px;
  background: ${props => themes[props.theme].background};
  outline: none;
  border: 1px solid ${props => themes[props.theme].background};
  cursor: pointer;
  transition: 0.2s;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    display: none;
  }

  ${props =>
    props.loading &&
    css`
      position: relative;

      span {
        opacity: 0;
      }

      .loader {
        opacity: 1;
        display: block;
      }
    `};
`;

export const InlineButton = styled(DefaultButton)`
  display: inline-flex;
  width: auto;
`;

export const IconsWrapper = styled.span`
  display: inline-block;
  font-size: 24px;
  margin-left: 4px;
  transform: translateY(1px);

  span {
    line-height: 12px;
  }
`;

export const Label = styled.span`
  display: inline-block;
`;

export default DefaultButton;
