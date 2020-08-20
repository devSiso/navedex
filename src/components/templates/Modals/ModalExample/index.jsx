import React, { useContext } from 'react';

import AppContext from '@context/appContext';

import {
  DefaultModalContent,
  Title,
  Body,
} from './styles';

/**
 * Example Modal
 */
export const ModalExample = () => {
  const { state } = useContext(AppContext);

  // function closeModal() {
  //   dispatch({ type: 'SET_MODAL_CLOSED' });
  // }

  return (
    <DefaultModalContent isOpened={state.modal.isOpened}>
      <Title>Experience</Title>
      <Body>
        <h2>modal</h2>
      </Body>
    </DefaultModalContent>
  );
};

// Example.propTypes = {
// };

// Example.defaultProps = {
// };

export default ModalExample;
