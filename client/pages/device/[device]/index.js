import React from 'react';
import SubHeader from './../../../components/SubHeader';
import styles from './../../../components/DevicePage.module.css';
import Image from 'next/image';
import cartPic from './../../../public/Cart.png';


const DevicePage = () => {

    const device = {id: 6, name: "Honor H20", price: 10000, img: '/img1.jpg'}

    const description = [
        {id: 1, title: "Оперативная память", description: "5 GB"},
        {id: 2, title: "Дисплей", description: "5\""},
        {id: 3, title: "Процессор", description: "Snap Dragon"},
        {id: 4, title: "Камера", description: "12 Мп"},
        {id: 5, title: "Аккумулятор", description: "3400 мA/час"},
        {id: 6, title: "Оперативная система", description: "Android"}
    ];
    let price = String(device.price);

    if (price.length === 5) {
        price = price.slice(0, 2) + " " + price.slice(2);
    } else if (price.length === 6) {
        price = price.slice(0, 3) + " " + price.slice(3);
    } else {
        return price;
    }
    
    

    return (
        <>
            <SubHeader />
            <div className={styles.MainWrapper}>
                <div className={styles.DeviceWrapper}>

                    <div className={styles.h2Wrapper}>
                        <h2>{device.name}</h2>
                    </div>

                    <div className={styles.ImageWrapper}>
                        <Image src={device.img} width={300} height={300}/>
                    </div>




                </div>

                <div className={styles.DescWrapper}>

                    <h2>Характеристики</h2>

                {description.map( (info, index) => 
                <div key={info.id} className={
                    index % 2 === 0 ? styles.Gray : styles.Transparent}>
                    {info.title}: {info.description}
                    </div>
                )}

                    <div className={styles.PriceWrapper}>
                        <h3>{price} руб.</h3>
                    </div>

                    <button className={styles.Cart}>
                        <div className={styles.CartDiv}>
                            <Image src={cartPic} width="20" height="17"/>
                            </div>
                        <div className={styles.CartSpan}>В корзину</div>
                    </button>
            </div>
            </div>
        </>
    )
}

export default DevicePage;
