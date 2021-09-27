import React, { useEffect, useContext } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import phonePic from '../public/phoneIcon.png';
import cartPic from '../public/Cart.png';
import MainContext from '../context/MainContext';



const Header = () => {

    const {isAuth, setIsAuth, cart} = useContext(MainContext);
    

    const logOut = () => {
        setIsAuth(false);
        localStorage.removeItem('token');
    }

    useEffect (() => {

    }, []);

    if (!isAuth) {
return (
       <div className={styles.mainHeader}>
            <div className={styles.widthHeader}>
                <div className={styles.wrapperHeader}>
                    <ul>
                        <li>
                            <Link href="/delivery"> 
                                 ДОСТАВКА 
                            </Link>
                        </li>
                        <li>
                            <Link href="/payment">    
                                ОПЛАТА 
                            </Link>
                        </li>
                        <li>
                            <Link href="/about"> 
                                 О НАС 
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.phoneHeader}>

                    <Image src={phonePic} width="21" height="21"/>

                    <span>+7 999 999 99 99</span>
                </div>
                
                <div className={styles.cartHeader}>
                    <Image src={cartPic} width="40" height="35"/>
                    {/* <span className={styles.cartCount}>{cart.length}</span> */}
                </div>
                
                <div className={styles.signHeader}>
                    <Link href="/auth">
                    <button className={styles.signInButton}>ВХОД</button>
                    </Link>
                    <Link href="/signin">
                    <button className={styles.loginButton}>РЕГИСТРАЦИЯ</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )

    } else {
       return (
       <div className={styles.mainHeader}>
            <div className={styles.widthHeader}>
                <div className={styles.wrapperHeader}>
                    <ul>
                        <li>
                            <Link href="/delivery"> 
                                 ДОСТАВКА 
                            </Link>
                        </li>
                        <li>
                            <Link href="/payment">    
                                ОПЛАТА 
                            </Link>
                        </li>
                        <li>
                            <Link href="/about"> 
                                 О НАС 
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.phoneHeader}>

                    <Image src={phonePic} width="21" height="21"/>

                    <span>+7 999 999 99 99</span>
                </div>
                
                <div className={styles.cartHeader}>
                    <Link href="/order"> 
                    <Image src={cartPic} width="40" height="35"/>
                    </Link>
                    <span className={styles.cartCount}>{ cart && JSON.parse(cart).length}</span>
                    
                </div>
                
                <div className={styles.signHeader}>
                    <Link href="/">
                    <button onClick={logOut} className={styles.signInButton}>Выйти</button>
                    </Link>
                </div>
            </div>
            
        </div>
    ) 
    }
    
}

export default Header;
