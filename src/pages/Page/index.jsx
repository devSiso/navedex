import React from 'react'
import PropTypes from 'prop-types'
import LoadingOverlay from 'react-loading-overlay';

import NavBar from '@components/molecules/NavBar'
import { PageDiv } from './styles'

const Page = ({ children, navVisible, loading }) => {
  return (
    <LoadingOverlay
      active={loading}
      spinner
    >
      {navVisible && <NavBar />}
      <PageDiv hasNav={navVisible}>
        {children}
      </PageDiv>
    </LoadingOverlay>
  )
}

Page.propTypes = {
  navVisible: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
  loading: PropTypes.bool
}

Page.defaultProps = {
  navVisible: undefined,
  loading: false
}

export default Page;
