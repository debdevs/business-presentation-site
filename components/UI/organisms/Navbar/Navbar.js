import React from 'react'
import { useContext } from 'react'
import styles from './Navbar.module.css'
import svg from '../../../../public/logo.svg'
import Image from 'next/image'
import { useState } from 'react'
import Menu from '../Menu/Menu'
import { HomeContext } from '../../../../contexts/HomeContext'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const {activeMenu, setActiveMenu } = useContext(
        HomeContext
      );
    const top_styles = [styles.top_bar, styles.top_bar_active]
    const mid_styles = [styles.mid_bar, styles.mid_bar_active]
    const bottom_styles = [styles.bottom_bar, styles.bottom_bar_active]
  return (
    <div>
    <nav className={styles.navbar}>          
        <nav className={styles.navbar_content}>
     <div className={styles.navbar_image_wrapper}>
    <Image
    src="/logo.png"
    alt="Picture of the author"
    layout='fill'
 
  /></div>


  <ul onClick={() => {active == false ? setActive(true): setActive(false); console.log(9); active == false ? setActiveMenu(true): setActiveMenu(false)}} className={styles.menu_parent}>
    <li className={active == false ? top_styles[0]:top_styles[1]}></li>
    <li className={active == false ? mid_styles[0]:mid_styles[1]}></li>
    <li className={active == false ? bottom_styles[0]:bottom_styles[1]}></li>
    </ul>
    </nav>      

  </nav>
  <Menu/>
  </div>
  )
}

export default Navbar