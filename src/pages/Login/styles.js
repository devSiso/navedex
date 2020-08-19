import styled from 'styled-components';
import { InputBorder } from '@assets/styles/colors';

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
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

  form {
    margin-top: 40px;

    button {
      margin-top: 32px;
    }
  }
`;

export default FormWrapper;
