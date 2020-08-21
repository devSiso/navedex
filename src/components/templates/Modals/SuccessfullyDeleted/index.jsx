import React, { useContext } from 'react';
import PropTypes from 'prop-types'

import AppContext from '@context/appContext'
import Button from '@components/molecules/Button'

import {
  DefaultModalContent,
  Title,
} from '../styles';

import {
  CloseContainer,
  Body
} from './styles'


const SuccessfullyDeleted = ({ isOpened }) => {
  const { dispatch } = useContext(AppContext);

  function closeModal() {
    return dispatch({ type: 'SET_MODAL_CLOSED' });
  }

  return (
    <DefaultModalContent size="medium" isOpened={isOpened}>
      <CloseContainer>
        <Button icon="close" theme="light" onClick={closeModal} />
      </CloseContainer>
      <Title>Naver excluido</Title>
      <Body>
        <p>Naver excluído com sucesso!</p>
      </Body>
    </DefaultModalContent>
  );
}

SuccessfullyDeleted.propTypes = {
  isOpened: PropTypes.bool
}

SuccessfullyDeleted.defaultProps = {
  isOpened: false
}

export default SuccessfullyDeleted;
