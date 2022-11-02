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
      <div className='flex flex-wrap justify-between items-center bg-blue'>
        <div  className='grid grid-cols-2 ml-10'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
          <h4 className='self-center text-base font-semibold text-white font-futura'>
            Все котики
          </h4>
        </NavLink>
        <NavLink to='/LikedCats' className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
            <h4 className='ml-5 pr-5 self-center text-base font-semibold text-white font-futura'>
              Любимые котики
            </h4>
          </NavLink>
          </div>
          <div className='mr-5'>
            <button onClick={toggleFullScreen}>
              <img src={FullScreen} className='h-5 sm:h-9' alt='FullScreen' />
            </button>
          </div>
        </div>
    </nav>
  )
}

export default Header
