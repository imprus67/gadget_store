import AuthContext from '../context/MainContext';
import { useState, useEffect } from 'react';
import { fetchTypes, fetchBrands, fetchDevices, fetchDevicesForPagination } from '../http/deviceAPI';

function ContextWrapper({children}) {






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
    const [cart, setCart] = useState(null);
    const [wasPicked, setWasPicked] = useState(null);
    const [infoArray, setInfoArray] = useState([{id : 1}]);

    

    useEffect (() => {

      const accessToken = localStorage.getItem('token');

      if (accessToken) {
      setIsAuth(true);
      }

    fetchTypes().then( data => setTypes(data.types));
    fetchBrands().then( data => setBrands(data.brands));

    fetchDevicesForPagination(null, null, 1, 5).then(data => {
        setDevices(data.rows) 
        setTotalCount(data.count)
    }
    )
    }, []);


    useEffect(() => {

       let productsInCart = localStorage.getItem('cart');

       if(productsInCart) {
           setCart(productsInCart)
       }
       

    // JSON.parse(productsInCart).map(async (deviceInfos) => {


    //   let pid = deviceInfos.id;

      
      

    //   const resInfo = await fetch(`http://localhost:5000/api/device/info/${pid}`);

    //   let loadedDevicesInfo = await resInfo.json();
      
    //     // console.log(loadedDevicesInfo)
    //   setInfoArray( prevState => ([...prevState, [{'id': pid, 'item': loadedDevicesInfo}]]))

      



    //   })

    }, []);

    useEffect(() => {

       let wasPickedButtons= localStorage.getItem('picked');

       if(wasPickedButtons) {
           setWasPicked(wasPickedButtons)
       }

    }, [wasPicked]);

    
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
        setActive,
        cart,
        setCart,
        wasPicked,
        setWasPicked,
        infoArray
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextWrapper;