import styled from 'styled-components'
import { BlackTexts, InputBorder, Placeholder } from '@assets/styles/colors'
import { LabelTp, InputTp } from '@assets/styles/typography';

export const Label = styled.label`
  ${LabelTp};
  color: ${BlackTexts};
  margin-bottom: 4px;}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.marginTop};

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    ${InputTp}
    width: 100%;
    border: 1px solid ${InputBorder};
    box-sizing: border-box;
    padding: 8px;
    color: ${BlackTexts}

    &::placeholder {
      color: ${Placeholder}
    }
  }

  [class^="--error-"], [class*=" --error-"] {
    margin-bottom: 8px;
  }
`;

export default InputWrapper;
