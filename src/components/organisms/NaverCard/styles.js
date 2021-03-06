import styled from 'styled-components'
import { BlackTexts } from '@assets/styles/colors'
import { cardTitle, Paragraph } from '@assets/styles/typography'

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  .link-wrapper {
    display: flex;
    flex-direction: column;
    color: ${BlackTexts};
    text-decoration: none;
    flex-wrap: wrap;

    figure {
      img {
        min-width: 280px;
        min-height: 280px;
      }
    }

    .naver-infos {
      display: flex;
      flex-flow: column wrap;
      margin-top: 16px;
      margin-bottom: 13px;

      h3 {
        ${cardTitle};
        margin-bottom: 4px;
      }

      p {
        ${Paragraph}
      }

    }
  }
`;

export const Image = styled.div`
  background-size: contain;
  width: 320px;
  height: 320px;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  width: 100%;

  button {
    max-width: 24px;
  }

  a {
    text-decoration: none;
    font-size: 24px;
    color: ${BlackTexts};
    margin-left: 8px;
  }
`

export default Card;
