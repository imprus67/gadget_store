import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.MainWrapper}>
                <div className={styles.wrapperFooter}>
                    <ul>
                        <li>
                            <Link href="/delivery"> 
                                 Доставка
                            </Link>
                        </li>
                        <li>
                            <Link href="/payment">    
                                Опата
                            </Link>
                        </li>
                        <li>
                            <Link href="/about"> 
                                 О нас 
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.Date}>2020 - {new Date().getFullYear()} Все права защищены</div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;
