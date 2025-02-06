import Link from "next/link";
import logo from '@/assets/logo.png'
import css from './main-header.module.css'
import Image from "next/image";
import HeaderBack from "./main-header-back";
import NavLink from './nav-link'

export default function Header(){

    return (
        <>
        <HeaderBack />
        <header  className={css.header}  >
            <Link href='/'  className={css.logo}  >  
            <Image    src={logo}  alt='A Plate' priority   /> 
            NextLevel Food   
            </Link>

            <nav className={css.nav}  >
                
                <ul>
                    <li>
                        <NavLink  href='/meals' > Browse Meals </NavLink>
                        <NavLink  href='/community' > Foodies Community </NavLink>                    
                    </li>
                </ul>  </nav>
        </header>

        </>
   
    )
}