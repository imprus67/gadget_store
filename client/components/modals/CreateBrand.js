import React, {useState} from 'react';
import styles from './CreateBrand.module.css';
import CreateModal from './CreateModal';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({active, setActive}) => {

    const [brand, setBrand] = useState('');

    const submitBrand = (e) => {
        e.preventDefault();
        let newBrand = {}
        newBrand.name = brand;
        createBrand(newBrand)
        .then(setActive(false))
        .catch((e) => console.log(e));

    }

    return (
        <CreateModal active={active} setActive={setActive}>

            <div className={styles.Wrapper}>
                <h2>Добавьте производителя</h2>
                <form onSubmit={submitBrand}>
                    <input className={styles.Input} 
                    placeholder="Введите название категории"
                    value={brand}
                    onChange={e => setBrand(e.target.value)}>

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

export default CreateBrand;
