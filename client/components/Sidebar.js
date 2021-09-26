import React, { useState, useEffect, useContext } from 'react';
import styles from './Sidebar.module.css';
import MainContext from '../context/MainContext';
import TypeItem from './TypeItem';
import {fetchTypes} from './../http/deviceAPI';

const Sidebar = () => {

        const {types,
        setTypes,  
        selectedType, 
        setSelectedType} = useContext(MainContext);


    return (
        <div className={styles.sidebarWrapper}>
            <h4 className={styles.category}>Каталог</h4>
            <div className={styles.sideBarWrapper}>
                <ul className={styles.sidebarList}>
                    
                    {types.map((category) => 
                    <TypeItem  key={category.id}
                    active={selectedType === category.id}
                    props={category}
                    selectedType={selectedType}
                    setSelectedItem = {setSelectedType}
                    />

                    )}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;

