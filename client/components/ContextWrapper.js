import AuthContext from '../context/MainContext';
import { useState, useEffect } from 'react';

function ContextWrapper({children}) {



    useEffect (() => {

      const accessToken = localStorage.getItem('token');

      if (accessToken) {
      setIsAuth(true);
      }
   
    }, []);

    const [selectedBrand, setSelectedBrand] = useState();
    const [selectedType, setSelectedType] = useState();
    const [isAuth, setIsAuth] = useState(false);
    const [brands, setBrands] = useState([
        {id: 1, name: "Samsung"},
        {id: 2, name: "Xiaomi"},
        {id: 3, name: "Honor"},
        {id: 4, name: "Nikia"},
        {id: 5, name: "Lenovo"},
        {id: 6, name: "Samsung"},
        {id: 7, name: "Xiaomi"},
        {id: 8, name: "Honor"},
        {id: 9, name: "Nokia"},
        {id: 10, name: "Lenovo"},
        
        
    ]);
    const [types, setTypes] = useState([
        {id: 1, name: "Смартфоны"},
        {id: 2, name: "Планшеты"},
        {id: 3, name: "Смарт часы"},
        {id: 4, name: "Аксессуары"},
        {id: 5, name: "Наушники"},
    ]);
    const [devices, setDevices] = useState([
        {id: 1, name: "Samsung A10", price: 100000, img: '/img1.jpg'},
        {id: 2, name: "Xiaomi Redmi Note 7", price: 10000, img: '/img1.jpg'},
        {id: 3, name: "Honor Disbass", price: 10000, img: '/img1.jpg'},
        {id: 4, name: "Samsung A10", price: 10000, img: '/img1.jpg'},
        {id: 5, name: "Xiaomi Redmi Note 7", price: 10000, img: '/img1.jpg'},
        {id: 6, name: "Honor Disbass", price: 10000, img: '/img1.jpg'}
    ]);
    
    return (
        <AuthContext.Provider value={{
        isAuth, 
        setIsAuth, 
        brands, 
        setBrands,
        selectedBrand,
        setSelectedBrand,
        types,
        setTypes,
        selectedType,
        setSelectedType,
        devices,
        setDevices
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextWrapper;