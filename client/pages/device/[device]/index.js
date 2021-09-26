import React, {useContext, useEffect, useState} from 'react';
import SubHeader from './../../../components/SubHeader';
import Image from 'next/image';
import styles from './../../../components/DevicePage.module.css';
import cartPic from './../../../public/Cart.png';


const DevicePage = ({filteredDevice, loadedDeviceInfo}) => {

        // const [loading, setLoading] = useState(true);
            
    const device = filteredDevice[0];
    console.log(loadedDeviceInfo)
    const description = loadedDeviceInfo;

    let price = String(device.price);

    if (price.length === 5) {
        price = price.slice(0, 2) + " " + price.slice(2);
    } else if (price.length === 6) {
        price = price.slice(0, 3) + " " + price.slice(3);
    } else if (price.length === 4) {
        price = price.slice(0, 1) + " " + price.slice(1);
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
                        <img 
                        src={`http://localhost:5000/${device.img}`} 
                        width={300} 
                        height={300}/>
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

export const getStaticProps = async (context) => {

    const pid = context.params.device;

    const res = await fetch('http://localhost:5000/api/device');
    let loadedDevice = await res.json();

    const resInfo = await fetch(`http://localhost:5000/api/device/info/${pid}`);
    let loadedDeviceInfo = await resInfo.json();

    const device = loadedDevice.rows;

    const filteredDevice = device.filter( obj => obj.id == pid );


  return {
    props: {
      filteredDevice,
      loadedDeviceInfo
    }
  }
}

export const getStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export default DevicePage;
