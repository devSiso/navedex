import React from 'react'
import PropTypes from 'prop-types'

import NavBar from '@components/molecules/NavBar'
import { PageDiv } from './styles'

const Page = ({ children, navVisible }) => {
  return (
    <>
      {navVisible && <NavBar />}
      <PageDiv hasNav={navVisible}>
        {children}
      </PageDiv>
    </>
  )
}

Page.propTypes = {
  navVisible: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]).isRequired,
}

Page.defaultProps = {
  navVisible: undefined,
}

export default Page;
