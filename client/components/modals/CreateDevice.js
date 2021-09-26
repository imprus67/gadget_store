import React, { useState } from 'react';
import styles from './CreateDevice.module.css';
import CreateModal from './CreateModal';
import { useContext, useEffect } from 'react';
import MainContext from '../../context/MainContext';
import { createDevice } from '../../http/deviceAPI';

const CreateDevice = ({active, setActive}) => {

    const {brands, types} = useContext(MainContext);



    const [info, setInfo] = useState([]);
    const [brandDevice, setBrandDevice] = useState('');
    const [typeDevice, setTypeDevice] = useState('');
    const [nameDevice, setNameDevice] = useState('');
    const [priceDevice, setPriceDevice] = useState(0);
    const [file, setFile] = useState(null);
    console.log(info);
 // console.log(brandDevice, typeDevice, nameDevice, priceDevice, file, info);
// console.log(brands);
    const selectFile = (e) => {
       setFile(e.target.files[0]);
    }
    const addInfo = (e) => {
        e.preventDefault();
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    //Arguments: key - либо titile либо description, 
    // value будем устанавливать в зависимости от key
    // 
    const addInfoNew = (key, value, number) => {
        setInfo(info.map((i) => i.number === number ? {...i, [key]: value}: i ))
        
    }


    const removeInfo = (e, num) => {

        e.preventDefault();

        setInfo(info.filter(i => i.number !== num));
    }

    const createDeviceFunc = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('name', nameDevice);
        formData.append('price', `${priceDevice}`);
        formData.append('brandId', brandDevice);
        formData.append('typeId', typeDevice);
        formData.append('img', file);
        formData.append('info', JSON.stringify(info));

        createDevice(formData).then(setActive(false)).catch((e) => console.log(e));

    }

    return (
        <CreateModal active={active} setActive={setActive}>
            
            <div className={styles.Wrapper}>
                <h2>Добавьте производителя</h2>
                <form onSubmit={createDeviceFunc}>

                    <div className={styles.SelectWrapper}>

                        <select value={brandDevice} onChange={(e) => setBrandDevice(e.target.value)} 
                        id="brands" name="brands" 
                        className={styles.Select}>
                            <option value="" selected disabled hidden>Выберите бренд устройства</option>
                            {brands.map((brand) => 
                                <option  
                                key={brand.id} 
                                value={brand.id}
                                >
                                    {brand.name}
                                </option>
                            )}

                        </select>

                    </div>

                    <div className={styles.SelectWrapper}>

                        <select 
                        id="types" 
                        name="types" 
                        value={typeDevice}
                        className={styles.Select}
                        onChange={(e) => setTypeDevice(e.target.value)}>
                            <option value="" selected disabled hidden>Выберите тип устройства</option>
                            {types.map((type) => 
                                <option 
                                key={type.id} 
                                value={type.id}>
                                    {type.name}
                                </option>
                            )}
                        </select>

                    </div>

                    <input 
                    onChange={(e) => setNameDevice(e.target.value)} 
                    placeholder="Введите название устройства">

                    </input>

                    <input 
                    onChange={(e) => setPriceDevice(Number(e.target.value))} 
                    placeholder="Введите цену устройства" type="number">

                    </input>

                    <input 
                    type="file" 
                    onChange= {selectFile}>

                    </input>

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
                                        <input onChange= {(e) => addInfoNew('title', e.target.value, i.number)}   placeholder="Введите название характеристики">

                                        </input>
                                    </div>
                                    <div className={styles.Input}>
                                        <input onChange= {(e) => addInfoNew('description', e.target.value, i.number)} placeholder="Введите описание характеристики">

                                        </input>
                                    </div>
                                    <div className={styles.ButtonRemove}>
                                        <button onClick={(e) => removeInfo(e, i.number)}>Удалить</button>
                                    </div>
                                    
                                </div>
                            )
                        }


                    </div>
                    <button type="submit" className={styles.Add}>Добавить</button>
                    <button className={styles.Close}
                    onClick={() => setActive(false) }>Закрыть</button>

                </form>
        </div>

        </CreateModal>
    )
}

export default CreateDevice;
