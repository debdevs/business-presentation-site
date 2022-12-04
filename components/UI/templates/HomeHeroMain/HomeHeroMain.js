import React from 'react'

import styles from './HomeHeroMain.module.css'



const HomeHeroMain = () => {
  return (
    <div className={styles.hero_container}>
      
      <div className={`${styles.hero_content_container} ${"padding_base"}`}>
      <div className= {styles.left_container}>
        <div className= {styles.text_container}>
          <h1>01</h1>
          <div className= {styles.front_text_container}>
            <h2>The Story.</h2>
            <div className= {styles.lower_texts}>
              <p>Discover how to partner with us to create amazing presentations</p>
              <button className= {styles.plain_button} >Read More</button>
            </div>
          </div>  
        </div>          
        </div>
        <div className= {styles.right_container}></div>
      </div>
      
 
      </div>
  )
}

export default HomeHeroMain