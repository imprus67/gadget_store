import React, {useState} from 'react';
import styles from './CreateType.module.css';
import CreateModal from './CreateModal';
import { createType } from '../../http/deviceAPI';

const CreateType = ({active, setActive}) => {

    const [type, setType] = useState('');

    const submitType = (e) => {
        e.preventDefault();

        let newType = {}
        newType.name = type;
        createType(newType)
        .then(setActive(false))
        .catch((e) => console.log(e));

    }

    return (
        <CreateModal active={active} setActive={setActive}>
            
        <div className={styles.Wrapper}>
            <h2>Добавьте категорию</h2>
            <form onSubmit={submitType}>
                <input className={styles.Input} 
                placeholder="Введите название категории"
                value={type}
                onChange={e => setType(e.target.value)}>

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