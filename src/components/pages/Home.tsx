import React from 'react';
import './Home.css';
import { CrosshairSimple, HandPeace, UsersThree, MaskHappy } from '@phosphor-icons/react';
import { SpeakerSimpleHigh, SpeakerSimpleX } from '@phosphor-icons/react';
import VideoBunnerHome from '../../assests/movies/ストリノヴァ　香奈美のテーマソング「美しい世界」.mp4';
import Logo from '../../../public/strinfinitlogo.png';
import Button from '../elements/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

const Home = () => {

  const [isMuted, setIsMuted] = React.useState(false)
  const bunner = React.useRef<HTMLVideoElement | null>(null)

  function muteUnmute() {
    bunner.current!.muted = isMuted
    setIsMuted(!isMuted)
  }

  return (
    <div className='home__container'>

      <div className="top-6 right-10 z-20 fixed sound">
        {isMuted ? (
          <SpeakerSimpleHigh onClick={muteUnmute} className='cursor-pointer speaker__high' color='white' size={32} />
        ) :
          (
            <SpeakerSimpleX onClick={muteUnmute} className='cursor-pointer speaker__simple__x' color='white' size={32} />
          )}
      </div>

          <video ref={bunner} className='bg__bunner__home' src={VideoBunnerHome} muted autoPlay loop />

      <div className="home__wrapper">
        <section className="bunner__home wrapper">
          <div className="items">
            <h1 className='tracking-tighter'>STRINFINIT</h1>
            <p>UNIDOS PELA <span>DIVERSÃO</span>, CONECTADOS PELA <span>VITÓRIA</span></p>
            <Button text='DOWNLOAD GAME' type='link' blank={true} url='https://www.strinova.com/download?lang=en-US' />
          </div>
        </section>
        <section className="about__union">
          <div className="flex flex-col justify-center items-center about__union__wrapper info wrapper">
            <div>
              <h1>BEM-VINDO AO STRINFINIT!</h1>
              <p id='description'>A União Strinfinit é mais do que apenas um grupo de jogadores; é uma comunidade unida pela paixão e sempre preparada para enfrentar novos desafios lado a lado.</p>
            </div>
            <Swiper
              modules={[Navigation, EffectCoverflow, Autoplay]}
              effect='coverflow'
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                  effect: 'none'
                },
              }}
            >
              <SwiperSlide className='flex justify-center items-center'>
                <div className="category category1">
                  <CrosshairSimple weight='thin' />
                  <span>Estratégia</span>
                  <p>Planejamos cada movimento com precisão, garantindo que nossas ações sejam eficazes e coordenadas.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex justify-center items-center'>
                <div className="category category2">
                  <UsersThree weight='thin' />
                  <span>Competição</span>
                  <p>Participamos ativamente em torneios e eventos, sempre buscando nos superar e elevar nosso nível de jogo.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex justify-center items-center'>
                <div className="category category3">
                  <HandPeace weight='thin' />
                  <span>Vitória</span>
                  <p>Nosso objetivo é alcançar o topo, celebrando cada conquista como resultado de nosso esforço e dedicação.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex justify-center items-center'>
                <div className="category category4">
                  <MaskHappy weight='thin' />
                  <span>Diversão</span>
                  <p>Acima de tudo, valorizamos a diversão e o espírito de comunidade, criando um ambiente acolhedor para todos os membros.</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="discord">
          <div className="flex flex-col justify-center items-center discord__wrapper wrapper">
            <div className="flex items-center">
              <img width={64} src={Logo} />
              <span className='ml-3 font-bold text-4xl text-white'>+</span>
              <img src="https://logos-world.net/wp-content/uploads/2020/12/Discord-Emblem.png" width={100} />
            </div>
            <div className='discord__text'>
              <h2><span>STRINFINIT</span> agora no Discord!</h2>
              <p>Agora temos uma comunidade oficial no Discord! Venha participar, fazer novas amizades, ir para calls, se divertir e resenhar com a galera. Não importa se você é do time da estratégia, da diversão ou das piadas, todo mundo é bem-vindo! Junte-se a nós e faça parte dessa diversão em grupo.</p>
              <Button text='Entrar como Visitante' type='link' url='https://discord.gg/9e3TfAfR8r' blank={true} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
