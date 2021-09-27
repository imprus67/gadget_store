import React, { useContext, useEffect, useState } from 'react';
import withAuth from './../../HOC/withAuth';
import MainContext from './../../context/MainContext';
import styles from './../../components/Order.module.css';
import SubHeader from '../../components/SubHeader';
import { priceModified } from '../../utils/price';
import { createOrder } from '../../http/deviceAPI';

const Order = () => {

      const { cart, wasPicked } = useContext(MainContext);

      let totalSum =0;

      let cartParsed = JSON.parse(cart);

      cartParsed.map((item) => totalSum += Number(item.price));

      console.log(totalSum);

      const makeOrder = () => {
        let orderedDevices = [];
        cartParsed.map((item) => orderedDevices.push(item.id));
        
        createOrder(orderedDevices).then(
          console.log('good')
        ).catch(e => console.log(e))
      }

      return (
        <>
          <SubHeader/>
          <h2 className={styles.Header}>Оформление заказа</h2>
          <div className={styles.Wrapper}>
            {cartParsed.map((product) => {
              return <div className={styles.WrapperItem}>
                    
                
                    <div className={styles.ImageWrapper}>
                        <img 
                        src={`http://localhost:5000/${product.img}`} 
                        width={150} 
                        height={150}/>
                    </div>

                    <div className={styles.ProductWrapper}>
                      <div className={styles.ProductID}>Артикул: {product.id}</div>
                      <div className={styles.ProductName}>{product.name}</div>
                    </div>

                    <div className={styles.PriceWrapper}>
                        <h3>{priceModified(product.price)} ₽</h3>
                    </div>

                </div>
            })}

            <div className={styles.UnderlineWrapper}>
                  <div className={styles.SumWrapper}>
                    <div className={styles.SumText}>Итого к оплате: </div>
                    <div className={styles.SumNumber}>{priceModified(totalSum)} ₽</div>
                  </div>
              <button
              onClick ={makeOrder} 
              className={styles.OrderButton}>Оформить заказ</button>
            </div>
          </div>
        </>
    )
}



export default withAuth(Order);
