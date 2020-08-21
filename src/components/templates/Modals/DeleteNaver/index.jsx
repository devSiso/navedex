import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import AppContext from '@context/appContext';
import NaversContext from '@context/naversContext'

import NaversService from '@api/services/navers'
import Button from '@components/molecules/Button'

import SuccessModal from '../Success'

import {
  DefaultModalContent,
  Title,
} from '../styles';

import {
  Body,
  ActionsWrapper
} from './styles'


export const DeleteNaverModal = ({ id }) => {
  const { state, dispatch } = useContext(AppContext);
  const { dispatch: NaversDispatch } = useContext(NaversContext);
  const [loading, setLoading] = useState(false);

  function closeModal() {
    return dispatch({ type: 'SET_MODAL_CLOSED' });
  }

  function openSuccessModal() {
    closeModal();
    return dispatch({ type: 'SET_MODAL_OPENED', component: SuccessModal, props: { title: "Naver excluído", text: "Naver excluído com sucesso!" } });
  }

  async function deleteNaver() {
    setLoading(true);
    let res;
    try {
      res = await NaversService.deleteNaver(id);
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
    } finally {
      setLoading(false);

      if (res.status === 200) {
        NaversDispatch({ type: 'REMOVE_NAVER', id });
        openSuccessModal();
      }
    }
  }

  return (
    <DefaultModalContent size="medium" isOpened={state.modal.isOpened}>
      <Title>Excluir Naver</Title>
      <Body>
        <p>Tem certeza que deseja excluir este Naver?</p>
        <ActionsWrapper>
          <div className="button-wrapper">
            <Button value="Cancelar" theme="light" onClick={closeModal} bordered />
          </div>
          <div className="button-wrapper">
            <Button value="Excluir" theme="dark" onClick={deleteNaver} loading={loading} />
          </div>
        </ActionsWrapper>
      </Body>
    </DefaultModalContent>
  );
};

DeleteNaverModal.propTypes = {
  id: PropTypes.string.isRequired
};


export default DeleteNaverModal;
