'use client'
import Image from 'next/image'
import React, { useEffect, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './page.module.css'
import Header from './components/Header'
import Preloader from './components/Preloader'

export default function Home() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  })
  return (
    <Fragment>
    <Header />
    <Preloader />
    </Fragment>
  )
}
