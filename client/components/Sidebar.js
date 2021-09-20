import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';
import axios from 'axios';
import TypeItem from './TypeItem';

const Sidebar = () => {

    const [types, setTypes] = useState([]);
    const [selectedItem, setSelectedItem] = useState();

    useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_URL + '/api/type')
    .then(response => setTypes(() => response.data.types));

    }, []);

    console.log(selectedItem);

    return (
        <div className={styles.sidebarWrapper}>
            <h4 className={styles.category}>Каталог</h4>
            <div className={styles.sideBarWrapper}>
                <ul className={styles.sidebarList}>
                    
                    {types.map((category) => 
                    <TypeItem  key={category.id}
                    active={selectedItem === category.id}
                    props={category}
                    selectedItem={selectedItem}
                    setSelectedItem = {setSelectedItem}
                    />

                    )}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;


// export async function getStaticProps(context) {
    
//     let types;
//     axios.get('http://localhost:5000/api/type')
//     .then(response => types = response.data.types);

//   return {
//     props: {types}, 
//   }
// }

