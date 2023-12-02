import React, { useEffect } from 'react'
import styles from './preloader.module.css'

const Preloader = () => {
  useEffect(() => {
    const preloaderFadeOutTime = 500
    const preloader = document.querySelector(`.${styles.spinnerWrapper}`)

    const hidePreloader = () => {
      setTimeout(() => {
        if (preloader) {
          preloader.style.display = 'none'
        }
      }, preloaderFadeOutTime)
    }

    hidePreloader()
  }, [])
  return (
    <div className={styles.spinnerWrapper}>
        <div className={styles.spinner}>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    </div>
  )
}

export default Preloader
