"use client"
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}:any) => {
  return (
    <Provider store={store}>

        <Header/>
        {children}
        <Footer />
      </Provider>
  )
}

export default Layout
