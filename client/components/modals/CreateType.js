import React from 'react';
import styles from './CreateType.module.css';
import CreateModal from './CreateModal';

const CreateType = ({active, setActive}) => {
    return (
        <CreateModal active={active} setActive={setActive}>
            
        <div className={styles.Wrapper}>
            <h2>Добавьте категорию</h2>
            <form>
                <input className={styles.Input} 
                placeholder="Введите название категории">

                </input>
                <label></label>

                <button className={styles.Add}>Добавить</button>
                <button className={styles.Close}
                onClick={() => setActive(false) }>Закрыть</button>

            </form>
        </div>

        </CreateModal>
    )
}

export default CreateType;