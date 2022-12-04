import React from 'react'
import styles from './Navbar.module.css'
import svg from '../../../../public/logo.svg'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>          
        <nav className={styles.navbar_content}>
     <div className={styles.navbar_image_wrapper}>
    <Image
    src="/logo.png"
    alt="Picture of the author"
    layout='fill'
 
  /></div>Navbar</nav>      
  
  </nav>
  )
}

export default Navbar