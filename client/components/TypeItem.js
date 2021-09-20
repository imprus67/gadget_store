import React, { useState } from 'react';
import styles from './TypeItem.module.css';
import { useAppContext } from '../context/state';

const TypeItem = ({props, setSelectedItem, active}) => {

    const {isAuth} = useAppContext();
    console.log(isAuth)

    return (


        <li className={active ? styles.active : styles.sidebarListItem}
        onClick={() => setSelectedItem(props.id) } >
            {props.name}
        </li>
    )
}

export default TypeItem;
