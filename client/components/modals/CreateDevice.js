import React, { useState } from 'react';
import styles from './CreateDevice.module.css';
import CreateModal from './CreateModal';
import { useContext } from 'react';
import MainContext from '../../context/MainContext';

const CreateDevice = ({active, setActive}) => {

    const {brands, types} = useContext(MainContext);

    const [info, setInfo] = useState([]);

    const addInfo = (e) => {
        e.preventDefault();
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (e, num) => {

        e.preventDefault();

        setInfo(info.filter(i => i.number !== num));
    }

    return (
        <CreateModal active={active} setActive={setActive}>
            
            <div className={styles.Wrapper}>
                <h2>Добавьте производителя</h2>
                <form>

                    <div className={styles.SelectWrapper}>

                        <select id="brands" name="brands" className={styles.Select}>
                            {brands.map((brand) => 
                            <option key={brand.id} value={brand.name}>{brand.name}</option>
                            )}
                        </select>

                    </div>

                    <div className={styles.SelectWrapper}>

                        <select id="types" name="types" className={styles.Select}>
                            {types.map((type) => 
                            <option key={type.id} value={type.name}>{type.name}</option>
                            )}
                        </select>

                    </div>

                    <input placeholder="Введите название устройства"></input>
                    <input placeholder="Введите цену устройства" type="number"></input>
                    <input type="file"></input>

                    <hr/>
                    <div className={styles.NewWrapper}>
                        <button 
                        className={styles.New}
                        onClick={addInfo}
                        >Добавить новое свойство
                        </button>
                        {
                            info.map((i) => 
                                <div key={i.number} className={styles.OptWrapper}>
                                    <div className={styles.Input}>
                                        <input placeholder="Введите название характеристики">

                                        </input>
                                    </div>
                                    <div className={styles.Input}>
                                        <input placeholder="Введите описание характеристики">

                                        </input>
                                    </div>
                                    <div className={styles.ButtonRemove}>
                                        <button onClick={(e) => removeInfo(e, i.number)}>Удалить</button>
                                    </div>
                                    
                                </div>
                            )
                        }


                    </div>
                    <button className={styles.Add}>Добавить</button>
                    <button className={styles.Close}
                    onClick={() => setActive(false) }>Закрыть</button>

                </form>
        </div>

        </CreateModal>
    )
}

export default CreateDevice;
