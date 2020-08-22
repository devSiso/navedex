import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useHistory } from "react-router-dom";

import Page from '@pages/Page'

import AppContext from '@context/appContext'
import NaversContext from '@context/naversContext'

import NaversService from '@api/services/navers'

import Icon from '@components/atoms/Icon'
import Input from '@components/atoms/Input'
import Button from '@components/molecules/Button'
import Form from '@components/organisms/Form'

import SuccessModal from '@components/templates/Modals/Success'

import { convertISOToDate } from '@src/utils/date'

import rules from './rules'

import {
  NaverPageWrapper,
  Title,
  ActionWrapper
} from './styles';

const Naver = () => {
  const { dispatch: appDispatch } = useContext(AppContext);
  const { dispatch: naversDispatch } = useContext(NaversContext);

  const history = useHistory();
  const { naverID } = useParams();

  const [pageTitle, setPageTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [naverData, setNaverData] = useState(false);

  const fetchNaver = async () => {
    setLoading(true);

    try {
      const { data } = await NaversService.getNaver(naverID);
      setNaverData({
        admission_date: convertISOToDate(data.admission_date),
        birthdate: convertISOToDate(data.birthdate),
        job_role: data.job_role,
        name: data.name,
        project: data.project,
        url: data.url,
      });
      setPageTitle("Editar naver");
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    } finally {
      setLoading(false);
    }
  }

  const cleanFields = () => {
    setNaverData({
      name: '',
      job_role: '',
      admission_date: '',
      birthdate: '',
      project: '',
      url: ''
    });
    setPageTitle("Adicionar naver");
  }

  const addNewNaver = async (formData) => {
    setLoading(true);
    let res;

    try {
      res = await NaversService.addNaver(formData);
      const { data } = res;
      naversDispatch({ type: 'ADD_NEW_NAVER', data })
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
    } finally {
      if (res.status === 200) {
        appDispatch({ type: 'SET_MODAL_OPENED', component: SuccessModal, props: { title: 'Naver criado', text: 'Naver criado com sucesso!' } });
      }
      setLoading(false)
    }
  }

  const updateNaver = async (formData) => {
    setLoading(true);
    let res;

    try {
      res = await NaversService.updateNaver(naverID, formData);
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
    } finally {
      if (res.status === 200) {
        appDispatch({ type: 'SET_MODAL_OPENED', component: SuccessModal, props: { title: 'Naver atualizado', text: 'Naver atualizado com sucesso!' } });
        history.push('/home');
      }
      setLoading(false);
    }
  }

  const handleSubmit = async (formData) => {
    if (!naverID) {
      await addNewNaver(formData);
    } else {
      await updateNaver(formData);
    }
  }

  useEffect(() => {
    if (naverID) {
      fetchNaver();
    } else {
      cleanFields();
    }
  }, []);

  return (
    <Page navVisible>
      <NaverPageWrapper>
        <div className="content">
          {pageTitle && (
            <header>
              <Link to="/home">
                <Icon name="arrow" />
              </Link>
              <Title>
                {pageTitle}
              </Title>
            </header>
          )}
          <div className="form-wrapper">
            {naverData && (
              <Form onSubmit={handleSubmit} defaultValues={naverData}>
                <Input
                  label="Nome"
                  name="name"
                  type="text"
                  rules={rules.name}
                  placeholder="Nome"
                  title="Nome"
                />
                <Input
                  label="Cargo"
                  name="job_role"
                  type="text"
                  rules={rules.occupation}
                  placeholder="Cargo"
                  title="Cargo"
                />
                <Input
                  label="Data de nascimento"
                  name="birthdate"
                  type="text"
                  rules={rules.birthdate}
                  controlled={1}
                  mask="99/99/9999"
                  placeholder="21/12/2000"
                  title="Data de nascimento"
                />
                <Input
                  label="Data de admissão"
                  name="admission_date"
                  type="text"
                  rules={rules.admission_date}
                  controlled={1}
                  mask="99/99/9999"
                  placeholder="01/09/2020"
                  title="Data de admissão"
                />
                <Input
                  label="Projetos que participou"
                  name="project"
                  type="text"
                  placeholder="Projetos que participou"
                  title="Projetos que participou"
                />
                <Input
                  label="URL da foto do Naver"
                  name="url"
                  type="text"
                  placeholder="URL da foto do Naver"
                  title="URL da foto do Naver"
                />
                <div />
                {/* FIX IT */}
                <ActionWrapper>
                  <Button type="submit" value="Salvar" title="Salvar" loading={loading} />
                </ActionWrapper>
              </Form>
            )}
          </div>
        </div>
      </NaverPageWrapper>
    </Page>
  )
}

export default Naver
