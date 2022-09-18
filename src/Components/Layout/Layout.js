import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import '../../styles/global.css'
import '../../styles/index.css'
import { useEffect } from 'react'

const Layout = ({ children }) => {
    useEffect(() => {
      document.body.style = 'overflow-x:hidden'
    }, [])
    
    return (
        <>
            <Header />

            {children}

            <Footer />
        </>

    )
}

export default Layout