import React, { useState, useContext } from 'react';
import styles from './TypeItem.module.css';
import MainContext from '../context/MainContext';

const TypeItem = ({props, setSelectedItem, active}) => {

   const { setPage, setActive } = useContext(MainContext);
    
    return (


        <li className={active ? styles.active : styles.sidebarListItem}
        onClick={() =>{ 
        setSelectedItem(props.id)
        setPage(1)
        setActive(1)} } >
            {props.name}
        </li>
    )
}

export default TypeItem;
