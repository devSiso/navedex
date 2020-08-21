import styled from 'styled-components'
import { BlackTexts } from '@assets/styles/colors'
import { Paragraph, InputTp } from '@assets/styles/typography'

export const DetailsWrapper = styled.div`
  display: flex;
  min-height: 504px;

  .figure-wrapper {
    max-width: 504px;
    width: 100%;
  }
`

export const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32px 21px 27px 30px;
  width: 100%;
  position: relative;

  header {
    margin-bottom: 24px;

    h2 {
      margin-bottom: 10px;
    }

    p {
      ${Paragraph};
    }
  }

  .naver-informations {
    list-style-type: none;

    li {
      margin-bottom: 24px;
      display: flex;
      flex-flow: column wrap;

      strong {
        ${InputTp};
        font-weight: 600;
        margin-bottom: 10px;
      }
      span {
        ${InputTp};
        font-weight: 400;
      }
    }
  }

`;

export const CloseContainer = styled.div`
  max-width: 14px;
  position: absolute;
  top: 21px;
  right: 21px;
  cursor: pointer;
  z-index: 90;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: auto;

  button {
    max-width: 24px;
    &:first-child {
      margin-right: 8px;
    }
  }

  a {
    text-decoration: none;
    font-size: 24px;
    color: ${BlackTexts};
    margin-left: 8px;
  }
`

export default DetailsWrapper;
