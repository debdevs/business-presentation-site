import React from 'react'
import styles from './Menu.module.css'
import { useState } from 'react'
import { useContext } from 'react'
import { HomeContext } from '../../../../contexts/HomeContext'
import { motion, AnimatePresence } from "framer-motion"

const Menu = ({state_value}) => {
    const [active, setActive] = useState(0)
    
    const {activeMenu, setActiveMenu } = useContext(
        HomeContext
      );
    const menu_styles = [styles.menu_bg,styles.menu_bg_active]
  return (


    <AnimatePresence>
    {activeMenu == true && (
      <motion.div
        initial={{ opacity: 0, x:115 }}
        animate={{ opacity: 1,x:0 }}
        exit={{ opacity: 0, x:215 }}
        transition={{
            delay: 0,
            x: { duration: .5 },
            default: { ease: "linear" }
          }}
        className={styles.menu_bg_active}
      >

        <div className={styles.menu_content}>
            <h1>Discover More</h1>
            <ul className={styles.menu_items_parent}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li></li>
            </ul>
  
    </div>



      </motion.div>
    )}
  </AnimatePresence>

  )
}

export default Menu