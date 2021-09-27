import React, {useContext, useEffect} from 'react';
import Image from 'next/image';
import cartPic from '../public/Cart.png';
import styles from './DeviceItem.module.css';
import Link from 'next/link';
import MainContext from '../context/MainContext';

const DeviceItem = (props) => {
    
    const {setCart, wasPicked, setWasPicked, isAuth} = useContext(MainContext);

    let price = String(props.device.price);

    console.log(isAuth)

    if (price.length === 4) {
        price = price.slice(0, 1) + " " + price.slice(1);
    } else if (price.length === 5) {
        price = price.slice(0, 2) + " " + price.slice(2);
    } else if (price.length === 6) {
        price = price.slice(0, 3) + " " + price.slice(3);
    } 


    const addToCart = (device) => {

    let existingEntries = JSON.parse(localStorage.getItem('cart'));

    if(existingEntries == null) {
            existingEntries = [];
    } else {
        existingEntries = Array.from(JSON.parse(localStorage.getItem('cart')))
    }

    let entry = {
        'id': device.id,
        'name': device.name,
        'price': device.price,
        'img': device.img
    };

    localStorage.setItem('cart', JSON.stringify(entry));

    existingEntries.push(entry);

    localStorage.setItem('cart', JSON.stringify(existingEntries));

    let productsInCart = localStorage.getItem('cart');

    setCart(productsInCart);




    let picked = JSON.parse(localStorage.getItem('picked'));

    if(picked == null) {
            picked = [];
    } else {
        picked = Array.from(JSON.parse(localStorage.getItem('picked')))
    }

    let pickedProduct = {
        'id': device.id
    };

    localStorage.setItem('picked', JSON.stringify(pickedProduct));

    picked.push(pickedProduct);

    localStorage.setItem('picked', JSON.stringify(picked));

    let pickedProducts = localStorage.getItem('picked');

    setWasPicked(pickedProducts);

   
    }

    let pick;
    if (wasPicked) {
       pick = JSON.parse(wasPicked).findIndex(item => item.id == props.device.id) == -1
    } else {
        pick = true;
    }
   

   
    return (
        <div className={styles.DeviceWrapper}>

            <Link href={process.env.NEXT_PUBLIC_INNER_URL + '/device/' + `${props.device.id}`}>
                <img src={`http://localhost:5000/${props.device.img}`} width="150" height="150"/>
            </Link>
                <div className={styles.BrandName}>Артикул: {props.device.id}</div>
                <div className={styles.DeviceName}>
                    {props.device.name}
                </div>
                <span className={styles.DevicePrice}>{price} р.</span>


            <button disabled={!isAuth} className={ pick ? styles.Cart : styles.CartClicked} 
            onClick={() => addToCart(props.device)}>
                <div className={styles.CartDiv}>
                    <Image src={cartPic} width="20" height="17"/>
                    </div>
                <div className={
                    styles.CartSpan
                }>В корзину</div>
            </button>
        </div>
    )
}


export default DeviceItem;
