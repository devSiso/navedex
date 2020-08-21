import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";

import AuthService from '@api/services/auth';
import { login, isLoggedIn } from '@src/utils/auth'

import Input from '@components/atoms/Input'
import Brand from '@components/atoms/Brand'
import Button from '@components/molecules/Button'
import Form from '@components/organisms/Form'

import Page from '@pages/Page'

import rules from './rules'

import { LoginPage, FormWrapper } from './styles'

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn()) {
      history.push('/home');
    }
  }, [])

  const onSubmit = async (formData) => {
    setLoading(true);
    let res;

    try {
      res = await AuthService.signIn(formData);
      await login(res.data.token);
    } catch (e) {
      setLoginError(true);
    } finally {
      setLoading(false);
    }

    if (res && res.status === 200) {
      history.push('/home');
    }
  }

  return !isLoggedIn() && (
    <Page>
      <LoginPage>
        <FormWrapper>
          <Link to="/">
            <Brand size="large" />
          </Link>
          <Form onSubmit={onSubmit}>
            <Input
              type="email"
              name="email"
              rules={rules.mail}
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
              rules={rules.password}
            />
            <Button type="submit" value="Entrar" title="Entrar" loading={loading} />
          </Form>
          {
            loginError && (
              <span className="error-span" style={{ marginTop: '16px' }}>
                Email ou senha inválidos
              </span>
            )
          }
        </FormWrapper>
      </LoginPage>
    </Page>
  )
}

export default Login;
