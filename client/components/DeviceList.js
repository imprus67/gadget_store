import React, {useContext, useEffect} from 'react'
import DeviceItem from './DeviceItem';
import MainContext from '../context/MainContext';
import styles from './DeviceList.module.css';

const DeviceList = () => {

    const {devices, setDevices} = useContext(MainContext);
  console.log(devices)



    return (
        <div className={styles.DeviceListWrapper}>
          {devices.map((device) => 
          <DeviceItem key={device.id} device={device}/>)}  
        </div>
    )
}

export default DeviceList;
