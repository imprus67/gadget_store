import React, {useContext} from 'react';
import styles from './Menu.module.css';
import MainContext from '../context/MainContext';
import TypeItem from './TypeItem';

const Menu = ({header, active, setActive}) => {

        const {types,
        setTypes,  
        selectedType, 
        setSelectedType} = useContext(MainContext);

 
    return (
        <div onClick={() => setActive(false)} 
        className={ active ? styles.MenuActive : styles.Menu}>

            <div className={styles.Blur}></div>

            <div onClick={(e) => e.stopPropagation()} 
            className={styles.MenuContent}>
                <div className={styles.MenuHeader}>{header}</div>

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

export default Menu;
