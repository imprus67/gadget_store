import React from 'react';
import styles from './CreateModal.module.css';   

const CreateModal = ({active, setActive, children}) => {

    console.log(active);
    
    return (
        <div className={active ? styles.ModalActive : styles.Modal } 
        onClick={ () => setActive(false)}
        >
            <div 
            className={active ? styles.ModalContent : styles.ModalContentActive}
            onClick={ e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default CreateModal;
