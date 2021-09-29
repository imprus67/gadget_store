import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import withAuth from './../../HOC/withAuth';
import MainContext from './../../context/MainContext';
import styles from './../../components/Order.module.css';
import SubHeader from '../../components/SubHeader';
import { priceModified } from '../../utils/price';
import { createOrder } from '../../http/deviceAPI';

const Order = () => {

      const { cart, setCart, setWasPicked, wasPicked } = useContext(MainContext);

      let totalSum =0;
      let emptyCart;
      let cartParsed = JSON.parse(cart);

      if (cartParsed != null) {
        cartParsed.map((item) => totalSum += Number(item.price));
      } 

      if (cart == null || cart.length < 3) {
        emptyCart = true;
      } else {
        emptyCart = false
      }

      const makeOrder = async () => {

        if (cartParsed) {

        let orderedDevices = [];
        cartParsed.map((item) => orderedDevices.push(item.id));
        
        try {

           await createOrder(orderedDevices);
           console.log('good');

           localStorage.removeItem('cart');
           localStorage.removeItem('picked');

           setCart(null);
           setWasPicked(null);

        } catch (e) {
          console.log(e)
        }

        } else {
          console.log('Cart is empty')
        }



      }

      const deleteDevice = (deletingDevice) => {

        let lcCart = localStorage.getItem('cart');

        const newCartParsed = cartParsed.filter(item => item.id !== deletingDevice);
        const newWasPicked = JSON.parse(wasPicked);
        const newWasPickedPicked = newWasPicked.filter (item => item.id !== deletingDevice);
        localStorage.setItem('cart', JSON.stringify(newCartParsed));
        localStorage.setItem('picked', JSON.stringify(newWasPickedPicked));
        setCart(JSON.stringify(newCartParsed));
        setWasPicked(JSON.stringify(newWasPickedPicked))

      }
      return (
        <>
          
          <SubHeader/>
          <h2 className={styles.Header}>Оформление заказа</h2>
          
          <div className={styles.Wrapper}>
            {cartParsed && cartParsed.map((product) => {
              return <motion.div 
                      initial= {{
                       y: -1000,
                      }}
                      animate= {{
                        y: 0
                      }}
                      exit={{ y: -1000 }}
                      className={styles.WrapperItem}
                       key={product.id}>
                    
                
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
                    <button 
                    onClick={() => deleteDevice(product.id)}
                    className={styles.DeleteButton}>+</button>

                </motion.div>
            })}

            
            <div className={styles.UnderlineWrapper}>
              { emptyCart && <h2>Ваша корзина пуста!</h2>}
                  <div className={styles.SumWrapper}>
                    <div className={styles.SumText}>Итого к оплате: </div>
                    <div className={styles.SumNumber}>{priceModified(totalSum)} ₽</div>
                  </div>
              <button
              onClick ={makeOrder}
              disabled={emptyCart} 
              className={styles.OrderButton}>Оформить заказ</button>
            </div>
          </div>
          
        </>
    )
}



export default withAuth(Order);
