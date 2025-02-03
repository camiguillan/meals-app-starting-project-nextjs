import Link from "next/link";
import logo from '@/assets/logo.png'
import css from './main-header.module.css'
import Image from "next/image";
import HeaderBack from "./main-header-back";

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
                        <Link href='/meals'>
                            Browse Meals 
                        </Link>   
                        <Link href='/meals'>
                            Foodies 
                        </Link>   
                    </li>
                </ul>  </nav>
        </header>

        </>
   
    )
}