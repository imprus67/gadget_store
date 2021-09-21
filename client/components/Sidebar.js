import React, { useState, useEffect, useContext } from 'react';
import styles from './Sidebar.module.css';
import MainContext from '../context/MainContext';
import TypeItem from './TypeItem';

const Sidebar = () => {

        const {types,  
        selectedType, 
        setSelectedType} = useContext(MainContext);

    // useEffect(() => {
    // axios.get(process.env.NEXT_PUBLIC_URL + '/api/type')
    // .then(response => setTypes(() => response.data.types));

    // }, []);


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

