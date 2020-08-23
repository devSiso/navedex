import styled from 'styled-components';
import { InputBorder } from '@assets/styles/colors';
import { goUpAndFade } from '@assets/styles/animations';

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 64px);
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 448px;
  border: 1px solid ${InputBorder};
  box-sizing: border-box;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${goUpAndFade} 1s;

  form {
    margin-top: 40px;

    button {
      margin-top: 32px;
    }
  }
`;

export default FormWrapper;
