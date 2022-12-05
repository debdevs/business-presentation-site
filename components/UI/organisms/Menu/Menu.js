import React from 'react'
import styles from './Menu.module.css'
import { useState } from 'react'
import { useContext } from 'react'
import { HomeContext } from '../../../../contexts/HomeContext'

const Menu = ({state_value}) => {
    const [active, setActive] = useState(0)
    
    const {activeMenu, setActiveMenu } = useContext(
        HomeContext
      );
    const menu_styles = [styles.menu_bg,styles.menu_bg_active]
  return (
    <div className={ activeMenu == true? menu_styles[1]: menu_styles[0]}>
        <div className={styles.menu_content}>
            <h1>Discover More</h1>
            <ul className={styles.menu_items_parent}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default Menu