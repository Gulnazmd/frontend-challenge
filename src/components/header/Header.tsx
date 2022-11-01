import { FC } from 'react'
import { NavLink } from 'react-router-dom'

// Images
import FullScreen from '../../images/pressed.svg'

const Header: FC = () => {
  const toggleFullScreen = () => {
    if (window.innerHeight == screen.height) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    } else {
      document.body.requestFullscreen()
    }
  }
  return (
    <nav className='w-full'>
      <div className='w-full grid grid-cols-5 bg-blue m-5 p-5 items-center'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
          <h4 className='self-center text-xl font-semibold text-white font-futura ml-8'>
            Все котики
          </h4>
        </NavLink>
        <NavLink to='/LikedCats' className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
            <h4 className='self-center text-xl font-semibold text-white font-futura'>
              Любимые котики
            </h4>
          </NavLink>
          <div>
            <button onClick={toggleFullScreen}>
              <img src={FullScreen} className='h-5 sm:h-9' alt='FullScreen' />
            </button>
          </div>
        </div>
    </nav>
  )
}

export default Header
