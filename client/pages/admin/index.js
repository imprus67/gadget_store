import React, { useState } from 'react';
import styles from './admin.module.css';
import SubHeader from './../../components/SubHeader';
import CreateBrand from '../../components/modals/CreateBrand';
import CreateType from '../../components/modals/CreateType';
import CreateDevice from '../../components/modals/CreateDevice';

const Admin = () => {
    const [isModalTypeVisible, setIsModalTypeVisible] = useState(false);
    const [isModalBrandVisible, setIsModalBrandVisible] = useState(false);
    const [isModalDeviceVisible, setIsModalDeviceVisible] = useState(false);

    return (
        <>
            <SubHeader />
            <div className={styles.MainWrapper}>

                <div className={styles.ButtonWrapper}>

                    <button className={styles.ButtonStyle}
                     onClick={() => setIsModalBrandVisible(true)}
                    >
                        Добавить бренд
                        </button> 
                    <button 
                    className={styles.ButtonStyle}
                    onClick={() => setIsModalTypeVisible(true)}
                    >
                        Добавить тип
                    </button>
                    <button className={styles.ButtonStyle}
                    onClick={() => setIsModalDeviceVisible(true)}
                    >
                        Добавить устройство
                    </button>

                </div>

            </div>

            <CreateType 
            active={isModalTypeVisible} 
            setActive={setIsModalTypeVisible}
            />



            <CreateBrand             
            active={isModalBrandVisible} 
            setActive={setIsModalBrandVisible}/>

            <CreateDevice              
            active={isModalDeviceVisible} 
            setActive={setIsModalDeviceVisible}/>
        </>
    )
}

export default Admin;
