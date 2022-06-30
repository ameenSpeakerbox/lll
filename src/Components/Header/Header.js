import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from '../../Assets/images/Logo.png'
import yearText from '../../Assets/images/yearText.png'


import '../../i18n'

const Header = () => {
    const { i18n, t } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage("en");
        // alert(i18n.language)
        if (!(i18n.language == "en" || i18n.language == "ar")) {
            i18n.changeLanguage("en");
            localStorage.setItem('i18nextLng', 'en')
        }
        return () => {
            i18n.changeLanguage('en')
        }
    }, [])

    const Menu = [
        { title: 'home', url: '/' },
        { title: 'company', url: '/company' },
        { title: 'our service', url: '' },
        { title: 'careers', url: '' },
    ]


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    // console.log(i18n.language)
    return (
        <div className='flex justify-between py-10 container'>
            <div className='flex'>
                <img src={Logo} className={'h-12 sm:h-14 lg:h-16'} alt="" />
                <div className='w-px h-full bg-slate-300	mx-5 ' />
                <img src={yearText} className={'h-14 sm:h-16 lg:h-20'} alt="" />
            </div>

            <div className='flex md:items-center'>
                <nav>

                    <ul className='flex capitalize text-primary font-bold justify-end pb-3 mr-3'>
                        <button className={i18n.language == 'en' ? 'border-b-2 border-primary font-bold' : 'hover-underline-animation font-bold cursor-pointer'} onClick={() => changeLanguage('en')}>English </button>
                        <div className='px-2'>|</div>
                        <button className={i18n.language == 'ar' ? 'border-b-2 border-primary font-bold' : 'hover-underline-animation font-bold cursor-pointer'} onClick={() => changeLanguage('ar')}>عربى</button>
                    </ul>

                    <ul className='flex'>
                        {Menu.map(item => (
                            <li className='mx-3 capitalize text-primary font-semibold cursor-pointer hover-underline-animation'>
                                <Link to={item.url}>
                                    {t(item.title)}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </nav>
            </div>

        </div>
    )
}

export default Header