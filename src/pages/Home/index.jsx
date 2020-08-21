import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import NaversService from '@api/services/navers'

import NaversContext from '@context/naversContext';

import Page from '@pages/Page'
import Button from '@components/molecules/Button'
import NaverCard from '@components/organisms/NaverCard'


import { Header, NotFound } from './styles';

SwiperCore.use([Pagination]);

const Home = () => {
  const history = useHistory();
  const { dispatch: NaversDispatch, state: NaversState } = useContext(NaversContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchNavers() {
      setLoading(true);
      try {
        const { data } = await NaversService.getNavers();
        NaversDispatch({ type: 'SET_NAVERS', navers: data });
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    fetchNavers();
  }, [])

  async function goToNaverPage() {
    return history.push('/naver');
  }

  return (
    <Page navVisible loading={loading}>
      <Header>
        <h2>Navers</h2>
        <Button value="Adicionar Naver" theme="dark" onClick={goToNaverPage} />
      </Header>
      <div>
        {
          NaversState.navers.length ? (
            <>
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
                  }
                }}
              >
                {
                  NaversState.navers.map(naver => (
                    <SwiperSlide key={naver.id}>
                      <NaverCard
                        id={naver.id}
                        imgSrc={naver.url}
                        occupation={naver.job_role}
                        name={naver.name}
                      />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              {
                NaversState.navers.length > 4 &&
                  <div className="swiper-pagination" />
              }
            </>
          ) : (
            <NotFound>
              <h2>
                {loading ? "Procurando por navers..." : "Navers não encontrados!"}
              </h2>
            </NotFound>
          )
        }
      </div>
    </Page>
  )
}

export default Home;
