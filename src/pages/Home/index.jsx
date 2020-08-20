import React, { useContext } from 'react'

import AppContext from '@context/appContext';

import Page from '@pages/Page'
import Button from '@components/molecules/Button'

import { ModalExample } from '@components/templates/Modals/ModalExample';

const Home = () => {
  const { dispatch } = useContext(AppContext);

  function handleOpenModal() {
    dispatch({ type: 'SET_MODAL_OPENED', component: ModalExample, props: {} });
  }

  return (
    <Page navVisible>
      <div>
        <h2>
          HomePage
        </h2>
        <Button value="Abrir modal" onClick={handleOpenModal} />
      </div>
    </Page>
  )
}

export default Home;
