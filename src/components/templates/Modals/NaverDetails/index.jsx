import React, { useEffect, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import AppContext from '@context/appContext';

import NaversService from '@api/services/navers';

import Figure from '@components/atoms/Figure'
import Button from '@components/molecules/Button'
import DeleteNaver from '@components/templates/Modals/DeleteNaver'

import {
  DefaultModalContent,
  Title,
} from '../styles';

import {
  DetailsWrapper,
  DetailsInfo,
  CloseContainer,
  ActionsWrapper
} from './styles'


const NaverDetailsModal = ({ id }) => {
  const { state, dispatch } = useContext(AppContext);
  const [naver, setNaver] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function closeModal() {
    return dispatch({ type: 'SET_MODAL_CLOSED' });
  }

  function openDeleteModal() {
    return dispatch({ type: 'SET_MODAL_OPENED', component: DeleteNaver, props: { id: naver.id } });
  }

  function goToEdit() {
    closeModal();
    history.push(`/naver/${id}`)
    // return window.location.pathname = `/naver/${id}`;
  }

  useEffect(() => {
    async function fetchNaver() {
      setLoading(true);

      try {
        const { data } = await NaversService.getNaver(id);
        setNaver(data);
      } catch (e) {
        // eslint-disable-next-line
        console.error(e)
      } finally {
        setLoading(false);
      }
    }
    console.log(loading)
    fetchNaver();
  }, [])

  return (
    <DefaultModalContent size="large" isOpened={state.modal.isOpened} noPadding>
      <CloseContainer>
        <Button icon="close" theme="light" onClick={closeModal} />
      </CloseContainer>
      {naver && (
        <DetailsWrapper>
          <div className="figure-wrapper">
            <Figure
              src={naver.url || ''}
              alt={`Picture of ${naver.name}`}
            />
          </div>
          <DetailsInfo>
            <header>
              <Title>{naver.name}</Title>
              <p>{naver.job_role}</p>
            </header>
            <ul className="naver-informations">
              <li>
                <strong>Idade</strong>
                <span>{naver.birthdate}</span>
              </li>
              <li>
                <strong>Tempo de empresa</strong>
                <span>{naver.admission_date}</span>
              </li>
              <li>
                <strong>Projetos que participou</strong>
                <span>{naver.project}</span>
              </li>
            </ul>
            <ActionsWrapper>
              <Button theme="light" icon="delete" onClick={openDeleteModal} />
              <Button theme="light" icon="edit" onClick={goToEdit} />
            </ActionsWrapper>
          </DetailsInfo>
        </DetailsWrapper>
      )}
    </DefaultModalContent>
  );
};

NaverDetailsModal.propTypes = {
  id: PropTypes.string.isRequired
}

export default NaverDetailsModal;
