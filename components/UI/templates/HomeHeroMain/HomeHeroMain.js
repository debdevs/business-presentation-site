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
            <ul className={styles.hero_list}>
              <li>Facebook</li>•
              <li>Twitter</li>•
              <li>Instagram</li>
              </ul>
            
          </div>
        </div>
        <div className={styles.right_content}>
        <div className={styles.image_wrapper}>
          <Image
      
        src="/brown-hairstreak-7616422_960_720.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
        </div>
        </div>

      
      </div>

 
      </div>
  )
}

export default HomeHeroMain