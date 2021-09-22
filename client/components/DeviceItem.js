import React from 'react';
import Image from 'next/image';
import cartPic from '../public/Cart.png';
import styles from './DeviceItem.module.css';
import Link from 'next/link';

const DeviceItem = (props) => {
    
    let price = String(props.device.price);
    if (price.length === 5) {
        price = price.slice(0, 2) + " " + price.slice(2);
    } else if (price.length === 6) {
        price = price.slice(0, 3) + " " + price.slice(3);
    } else {
        return price;
    }
    
    return (
        <div className={styles.DeviceWrapper}>

            <Link href={process.env.NEXT_PUBLIC_INNER_URL + '/device/' + `${props.device.id}`}>
                <Image src={props.device.img} width="150" height="150"/>
            </Link>
                <div className={styles.BrandName}>Samsung...</div>
                <div className={styles.DeviceName}>
                    {props.device.name}
                </div>
                <span className={styles.DevicePrice}>{price} р.</span>


            <button className={styles.Cart}>
                <div className={styles.CartDiv}>
                    <Image src={cartPic} width="20" height="17"/>
                    </div>
                <div className={styles.CartSpan}>В корзину</div>
            </button>
        </div>
    )
}

// props.device.price.slice(0, 1) + " " + props.device.price.slice(1);

export default DeviceItem;
