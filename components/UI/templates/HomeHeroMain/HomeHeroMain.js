import React from 'react'

import styles from './HomeHeroMain.module.css'

import Image from 'next/image'
{/* <div className={`${styles.hero_content_container} ${"padding_base"}`}> */}

const HomeHeroMain = () => {
  return (
    <div className={styles.hero_container}>
      <div className= {styles.left_bg}/>
      <div className= {styles.right_bg}/>
      <div className={styles.hero_content_container}>
        <div className={styles.left_content}>
          <div className={styles.top_items}>
            <h1>The Story.</h1>
            <h2>01</h2>

          </div>
          <div className={styles.bottom_items}>
            <p>FDSFDI AFHASO FHUIDS F</p>
            <button>Read More</button>
            
          </div>
        </div>
        <div className={styles.right_content}>
          <Image></Image>
        </div>

      
      </div>

 
      </div>
  )
}

export default HomeHeroMain