import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import Figure from '@components/atoms/Figure'
import Icon from '@components/atoms/Icon'
import Button from '@components/molecules/Button'

import AppContext from '@context/appContext'

import DeleteNaver from '@components/templates/Modals/DeleteNaver'
import NaverDetails from '@components/templates/Modals/NaverDetails'

import { Card, ActionsWrapper } from './styles'

const NaverCard = ({ id, imgSrc, name, occupation }) => {
  const { dispatch } = useContext(AppContext);

  function openDeleteModal() {
    return dispatch({ type: 'SET_MODAL_OPENED', component: DeleteNaver, props: { id } });
  }

  function openDetails() {
    return dispatch({ type: 'SET_MODAL_OPENED', component: NaverDetails, props: { id } });
  }

  return (
    <Card>
      <Link to={`/home#${id}`} className="link-wrapper" onClick={openDetails}>
        <Figure
          src={imgSrc}
          alt={`Picture of ${name}`}
        />
        <div className="naver-infos">
          <h3>{name}</h3>
          <p>{occupation}</p>
        </div>
      </Link>
      <ActionsWrapper className="actions">
        <Button theme="light" icon="delete" onClick={openDeleteModal} />
        <Link to={`/naver/${id}`}>
          <Icon name="edit" />
        </Link>
      </ActionsWrapper>
    </Card>
  )
}

NaverCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired
}


export default NaverCard;
