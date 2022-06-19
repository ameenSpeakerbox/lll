import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Cursor from '../components/cursor'
import LangSwitcher from '../context/SwitchLang/LanguageContext'





const Layout = ({ children }) => {



    


    
        return (
            <div>
                <LangSwitcher>
                    <Header />
                    {children}

                    <Cursor />
                    <Footer />
                </LangSwitcher>
            </div>
        )
    
    

}


export default Layout

