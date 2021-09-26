import AuthContext from '../context/MainContext';
import { useState, useEffect } from 'react';
import { fetchTypes, fetchBrands, fetchDevices, fetchDevicesForPagination } from '../http/deviceAPI';

function ContextWrapper({children}) {



    useEffect (() => {

      const accessToken = localStorage.getItem('token');

      if (accessToken) {
      setIsAuth(true);
      }

    fetchTypes().then( data => setTypes(data.types));
    fetchBrands().then( data => setBrands(data.brands));
    // fetchDevices().then( data => {
    //     setDevices(data)
    // });

    fetchDevicesForPagination(null, null, 1, 5).then(data => {
        setDevices(data.rows) 
        setTotalCount(data.count)
    }
    )
    }, []);

    const [active, setActive] = useState(1);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [limit, setLimit] = useState(3);
    const [selectedBrand, setSelectedBrand] = useState();
    const [selectedType, setSelectedType] = useState();
    const [isAuth, setIsAuth] = useState(false);
    const [brands, setBrands] = useState([]);
    const [types, setTypes] = useState([]);
    const [devices, setDevices] = useState([]);
    
    return (
        <AuthContext.Provider value={{
        page,
        setPage,
        totalCount,
        setTotalCount,
        limit,
        setLimit,
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
        setDevices,
        active, 
        setActive
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextWrapper;