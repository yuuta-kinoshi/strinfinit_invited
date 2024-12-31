import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../public/strinfinitlogo.png'
import "./Header.css"
import { List } from '@phosphor-icons/react'

const Header = () => {

  const [bars, setBars] = React.useState(false)

  return (
    <header className='px-3 py-2 w-full p' style={{ background: 'var(--dark)', borderBottom: '1px solid var(--primary)' }}>
      <div className="relative flex justify-between items-center px-3 header__wrapper">
        <div className="flex items-center menu">
          <div className="flex items-center gap-8 header__logo">
            <Link className='flex items-center' to='/'>
              <img className='w-16' src={Logo} alt="Logo" />
              <h1 style={{ color: 'var(--primary)' }} className='text-5xl tracking-tighter translate-y-1'>STRINFINIT</h1>
            </Link>
            <List className='block md:hidden' onClick={() => setBars(!bars)} color='#fff' size={32} />
          </div>
          <nav>
            <ul className='md:flex items-center gap-10 hidden ml-20 font-bold text-2xl text-white translate-y-1'>
              <li><Link to='/'>INÍCIO</Link></li>
              <li><Link to='/invitation'>VAGAS</Link></li>
            </ul>
          </nav>
          {bars && (
          <nav className='mobile-menu'>
            <ul>
              <li><a href='/'>INÍCIO</a></li>
              <li><a href='/invitation'>VAGAS</a></li>
            </ul>
          </nav>
        )}
        </div>
        
      </div>
    </header>
  )
}

export default Header
