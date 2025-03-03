import { Outlet } from 'react-router'
import './Header.css'
import logo from '../assets/images/logo.svg'

const Header = () => {
  return (
    <>
      <div className='header'>
        <img src={logo} alt='logo' />
        <h1>Pages Sample</h1>
      </div>
      <hr />
      <Outlet />
    </>
  )
}

export default Header
