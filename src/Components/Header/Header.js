import React,{useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import Search from '../Search/Search'
// import Search from './'
function Header({clr}) {
    const [active, setActive] = useState(true)
    const pages = {
        Title:['HOME','ABOUT','SERVICES','WORK','CONNECT'],
        link:['/','/about','/services','work','/connect']
    }
    const hidden =()=>{
        // console.log(window.pageYOffset)
        if(window.pageYOffset > 0){
            setActive(false)
        }else{
            setActive(true)
        }
    }
    window.addEventListener('scroll',hidden)
    return (
        <>
        <div style={{backgroundColor:clr}} className={active?'header':'header_onscroll'}>
            <div className='img_div'>
                <Link to='/'>
                <img src='/img/Logo.png' alt='logo'/>
                </Link>
            </div>
            <div className='lst_div'>
                <ul>
                    {pages['Title'].map((item,i)=>(
                        <li className='ul_lst'>
                            <Link to={pages['link'][i]}>
                            {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='header_email'>
                <h2>julia<span>@milkandhoneydigital.com</span></h2>
            </div>
        </div>
        <div className={active?'header_search':'header_search_hidden'}>
        <Search/>
        </div>
        </>
    )
}

export default Header
