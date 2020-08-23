import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import NaversService from '@api/services/navers';

import AppContext from '@context/appContext';
import NaversContext from '@context/naversContext';

import Page from '@pages/Page';
import Button from '@components/molecules/Button';
import NaverCard from '@components/organisms/NaverCard';

import NaverDetails from '@components/templates/Modals/NaverDetails';
import InfoModal from '@components/templates/Modals/InfoModal';

import { Header, NotFound, AnimatedWrapper, PaginationWrapper } from './styles';

SwiperCore.use([Pagination]);

const Home = () => {
  const history = useHistory();
  const { dispatch: NaversDispatch, state: NaversState } = useContext(NaversContext);
  const { dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  function openDetailsModal(id) {
    return dispatch({ type: 'SET_MODAL_OPENED', component: NaverDetails, props: { id } });
  }

  function openErrorModal(status) {
    return dispatch({
      type: 'SET_MODAL_OPENED',
      component: InfoModal,
      props: { title: 'Erro', text: `Erro ao carregar navers. CODE: ${status}` },
    });
  }

  useEffect(() => {
    async function fetchNavers() {
      setLoading(true);

      try {
        const { data } = await NaversService.getNavers();
        NaversDispatch({ type: 'SET_NAVERS', navers: data });
      } catch (e) {
        if (e.respose) openErrorModal(e.response.status);
        // eslint-disable-next-line
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    fetchNavers();

    if (history.location.hash) {
      const id = history.location.hash.replace('#', '');
      openDetailsModal(id);
    }
  }, []);

  async function goToNaverPage() {
    return history.push('/naver');
  }

  return (
    <Page navVisible>
      <Header>
        <h2>Navers</h2>
        <Button value="Adicionar Naver" theme="dark" onClick={goToNaverPage} />
      </Header>
      <div>
        {NaversState.navers.length ? (
          <AnimatedWrapper>
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              slidesPerGroup={4}
              loopFillGroupWithBlank
              allowTouchMove={false}
              pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}">${index + 1}</span>`;
                },
              }}
            >
              {NaversState.navers.map((naver) => (
                <SwiperSlide key={naver.id}>
                  <NaverCard
                    id={naver.id}
                    imgSrc={naver.url}
                    occupation={naver.job_role}
                    name={naver.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {NaversState.navers.length > 4 && (
              <PaginationWrapper isVisible={!loading}>
                <div className="swiper-pagination" />
              </PaginationWrapper>
            )}
          </AnimatedWrapper>
        ) : (
          <NotFound>
            <h2>{loading ? 'Procurando por navers...' : 'Nenhum naver foi registrado!'}</h2>
          </NotFound>
        )}
      </div>
    </Page>
  );
};

export default Home;
