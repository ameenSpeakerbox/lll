import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import '../../styles/global.css'
import '../../styles/index.css'

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            {children}

            <Footer />
        </>

    )
}

export default Layout