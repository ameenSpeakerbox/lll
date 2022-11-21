import React from 'react'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'


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