import React from 'react'
import "./navbar.css"
import { FiMessageSquare } from 'react-icons/fi'
import { PiHandCoins } from 'react-icons/pi'
import { PiSuitcaseBold } from 'react-icons/pi'
import { MdOutlinePeopleAlt } from 'react-icons/md'
const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="Logo">
            <h3>Logo</h3>
        </div>
        <p><PiSuitcaseBold size={18} className='toogle-icons'/>Jobs</p>
        <div className="Toogle">
            <h3><FiMessageSquare size={18} className='toogle-icons' /><img src='Ellipse 4.png' alt='nothing'></img>Messages</h3>
            <h3><PiHandCoins size={18} className='toogle-icons'/>Payments</h3>
            <h3><MdOutlinePeopleAlt size={18} className='toogle-icons' />Application</h3>
        </div>
        <div className="notify">
            <div className="bell">
                <img src='bell-02 (2).png' alt='nothing'></img>
                <img className="dot" src='Ellipse 4.png' alt='nothing'></img>
            </div>
            <div>
                <img src='Frame 1.png'alt='nothing'></img>
            </div>


        </div>
  </div>
  )
}

export default Navbar