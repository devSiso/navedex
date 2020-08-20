import React from 'react'
import NavBar from '@components/molecules/NavBar'
import PropTypes from 'prop-types'
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired
}

Page.defaultProps = {
  navVisible: undefined
}

export default Page;
