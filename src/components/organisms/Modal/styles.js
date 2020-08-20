import styled, { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import { Black } from '@assets/styles/colors';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  visibility: ${props => (props.isOpened ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpened ? 1 : 0)};
`;

export const RemoveBodyScroll = createGlobalStyle`
  body {
    overflow-y: scroll;
    height: calc(100vh - 80px);
  }
`;


export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: ${rgba(Black, 0.7)};
  z-index: -1;
  opacity: ${props => (props.isOpened ? 1 : 0)};
  transition: 0.2s;
`;
