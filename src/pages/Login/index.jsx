import React, { useState, useEffect } from 'react'
import Form from '@components/organisms/Form'
import Input from '@components/atoms/Input'
import Brand from '@components/atoms/Brand'
import Button from '@components/molecules/Button'
import AuthService from '@api/services/auth';
import { login, isLoggedIn } from '@src/utils/auth'
import { Link, useHistory } from "react-router-dom";
import { LoginPage, FormWrapper } from './styles'

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if(isLoggedIn()) {
      history.push('/home');
    }
  }, [])

  const onSubmit = async (formData) => {
    setLoading(true);
    let res;

    try {
      res = await AuthService.signIn(formData);
    } catch(e) {
      setLoginError(true);
    } finally {
      setLoading(false);
    }

    if (res && res.status === 200) {
      await login(res.data.token);
      history.push('/home');
    }
  }

  const loginFormRules = {
    mail: {
      pattern: {
        // eslint-disable-next-line
        value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        message: "Insira um e-mail válido"
      },
      required: {
        value: true,
        message: "Por favor, insira seu e-mail"
      }
    },
    password: {
      required: {
        value: true,
        message: "Por favor, insira sua senha"
      }
    }
  }

  return !isLoggedIn() && (
    <LoginPage>
      <FormWrapper>
        <Link to="/">
          <Brand size="large" />
        </Link>
        <Form onSubmit={onSubmit}>
          <Input
            type="email"
            name="email"
            rules={loginFormRules.mail}
            className="input__email"
            placeholder="E-mail"
            label="E-mail"
            title="email"
          />
          <Input
            label="Senha"
            placeholder="Senha"
            type="password"
            name="password"
            title="password"
            marginTop="32px"
            rules={loginFormRules.password}
          />
          <Button type="submit" value="Entrar" title="Entrar" loading={loading} />
        </Form>
        {
          loginError && (
            <span className="error-span" style={{marginTop: '16px'}}>
              Email ou senha inválidos
            </span>
          )
        }
      </FormWrapper>
    </LoginPage>
  )
}

export default Login;
