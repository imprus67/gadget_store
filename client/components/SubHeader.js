import React from 'react';
import styles from './SubHeader.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logoPic from '../public/Logo.png';
import deliveryPic from '../public/Delivery.png';
import perchaseReturnPic from '../public/PerchaseReturn.png';
import supportPic from '../public/Support.png';


const SubHeader = () => {
    return (
        <div className={styles.SubHeaderWrapper}>

        <div className={styles.logoWrapper}>
            <div>
            <Link href="/">
                <a>
                <Image src={logoPic} width="300" height="50"/>
                </a>
            </Link>
            </div>
        </div>

        <div className={styles.imagesWrapper}>
           
            <div>
                <Image src={deliveryPic} width="215" height="50"/>
            </div>
            
            <div>
                <Image src={perchaseReturnPic} width="215" height="50"/>
            </div>
            
            <div>
                <Image src={supportPic} width="215" height="50"/>
            </div>
            
        </div>

        </div>
    )
}

export default SubHeader;
