import React from 'react';
import { useContext } from 'react';
import styles from './MainContent.module.css';
import MainContext from '../context/MainContext';
import DeviceList from './DeviceList';
import Pagination from './Pagination';

const MainContent = () => {

    const {brands,  
        selectedBrand, 
        setSelectedBrand,
        setPage,
        setActive} = useContext(MainContext);

    return (
        <div className={styles.MainContent}>
            <div className={styles.Brands}>
                {
                brands.map((brand) => 
                    <div key={brand.id}
                    className={brand.id === selectedBrand ? 
                        styles.BrandItemActive : 
                        styles.BrandItem}
                    onClick={() => {
                        setSelectedBrand(brand.id)
                        setPage(1)
                        setActive(1)
                        }}>
                        {brand.name}
                    </div>
                )
                }
            </div>
            <div className={styles.Devices}>
                <DeviceList />    
            </div>
            <Pagination />
        </div>
    )
}

export default MainContent;
