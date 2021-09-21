import React, { useState } from 'react';
import styles from './TypeItem.module.css';
// import { useContext } from 'react';
// import AuthContext from '../context/AuthContext';

const TypeItem = ({props, setSelectedItem, active}) => {

    //const {isAuth, setIsAuth} = useContext(AuthContext);
    
    return (


        <li className={active ? styles.active : styles.sidebarListItem}
        onClick={() => setSelectedItem(props.id) } >
            {props.name}
        </li>
    )
}

export default TypeItem;
