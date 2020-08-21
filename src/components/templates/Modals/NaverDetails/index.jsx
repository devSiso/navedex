import React, { useEffect, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import LoadingOverlay from 'react-loading-overlay';
import { useHistory, Link} from 'react-router-dom'

import AppContext from '@context/appContext';

import NaversService from '@api/services/navers';

import { getAge, getPreciseDiff } from '@src/utils/date'

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

  useEffect(() => {
    if (!state.modal.isOpened) {
      setNaver({});
      history.push('/home')
    } else {
      fetchNaver();
    }
  }, [state.modal.isOpened]);

  return (
    <DefaultModalContent size="large" isOpened={state.modal.isOpened} noPadding>
      <LoadingOverlay
        active={loading}
        spinner
        styles={{
          overlay: (base) => ({
            ...base,
            background: 'rgba(255, 255, 255, 1)'
          }),
          spinner: (base) => ({
            ...base,
            width: '80px',
            '& svg circle': {
              stroke: 'rgba(0, 0, 0, 1)'
            }
          })
        }}
      >
        <CloseContainer>
          <Button icon="close" theme="light" onClick={closeModal} />
        </CloseContainer>
        <DetailsWrapper>
          {(naver && !loading) && (
            <>
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
                  {naver.birthdate && (
                    <li>
                      <strong>Idade</strong>
                      <span>{`${getAge(naver.birthdate)} anos`}</span>
                    </li>
                  )}
                  {naver.admission_date && (
                    <li>
                      <strong>Tempo de empresa</strong>
                      <span>{getPreciseDiff(naver.admission_date)}</span>
                    </li>
                  )}
                  {naver.project && (
                    <li>
                      <strong>Projetos que participou</strong>
                      <span>{naver.project}</span>
                    </li>
                  )}
                </ul>
                <ActionsWrapper>
                  <Button theme="light" icon="delete" onClick={openDeleteModal} />
                  <Link to={`/naver/${id}`}>
                    <Button theme="light" icon="edit" onClick={closeModal} />
                  </Link>
                </ActionsWrapper>
              </DetailsInfo>
            </>
          )}
        </DetailsWrapper>
      </LoadingOverlay>
    </DefaultModalContent>
  );
};

NaverDetailsModal.propTypes = {
  id: PropTypes.string.isRequired
}

export default NaverDetailsModal;
