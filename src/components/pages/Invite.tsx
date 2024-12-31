import './Invite.css'

import Kanami from '../../assests/images/Kanami_Default.png'
import Madellena from '../../assests/images/madellena_render.png'
import Yvette from '../../assests/images/Yvette_Default.png'

import { CaretDoubleDown } from '@phosphor-icons/react'
import Button from '../elements/Button'

const Invite = () => {
  return (
    <div className='invite__container'>
      <div className="flex invite__wrapper">
        <div className="invite__content">
          <h1><span></span>Participe de um processo de seleção para concorrer a vaga</h1>
          <hr id='line' />
          <p>Para concorrer a vaga, basta entrar no nosso grupo do Discord, agendar uma partida e aguardar os resultados. Simples, né!</p>
          <div className="vagas">
            <strong>VAGAS:</strong>
            <span>8/15</span>
          </div>
          <CaretDoubleDown className='arrow__down' size={74} />
          <Button text='Entrar no Servidor' type='link' url='https://discord.gg/927bb5DpJC' blank={true} />
        </div>
        <div className="illust__content">
          <img src={Kanami} id='kanami' alt="" />
          <img src={Madellena} id='madellena' alt="" />
          <img src={Yvette} id='yvette' alt="" />
          <img src="https://wallpapers.com/images/hd/orange-paint-splash-texture-54d6vbrq241lqlil-2.jpg" id='splash' style={{ marginLeft: '700px' }} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Invite
