import { React } from 'react'
import './Navbar.css'
import logo from '../Assets/icn.jpg'
// import fon from '../Assets/fon.png'
// import fonW from '../Assets/fonW.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

 
  return (
    
      <div className='navbar'>
        <img className='icon' src={logo} alt=''/>
        <ul className='nav-menu'>
            <li><Link to='/' className='active-link' style={{textDecoration: 'none', color: 'white'}}>Все товары</Link></li>
            <li><Link to='/contacts' className='active-link' style={{textDecoration: 'none', color: 'white'}}>Контакты</Link></li>
        </ul>
        </div>
    
    
    
    
  )
}
