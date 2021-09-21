import React from 'react';
import { useContext } from 'react';
import styles from './MainContent.module.css';
import MainContext from '../context/MainContext';
import DeviceList from './DeviceList';

const MainContent = () => {

    const {brands,  
        selectedBrand, 
        setSelectedBrand} = useContext(MainContext);

    console.log(brands);

    return (
        <div className={styles.MainContent}>
            <div className={styles.Brands}>
                {
                brands.map((brand) => 
                    <div key={brand.id}
                    className={brand.id === selectedBrand ? 
                        styles.BrandItemActive : 
                        styles.BrandItem}
                    onClick={() => setSelectedBrand(brand.id)}>
                        {brand.name}
                    </div>
                )
                }
            </div>
            <div className={styles.Devices}>
                <DeviceList />    
            </div>
            
        </div>
    )
}

export default MainContent;
