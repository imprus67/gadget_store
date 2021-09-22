import React, { useState, useContext } from 'react';
import styles from './auth.module.css';
import Link from 'next/link';
import { login } from '../../http/userAPI';
import Router from 'next/router';
import MainContext from '../../context/MainContext';

const Auth = () => {

    const {isAuth, setIsAuth} = useContext(MainContext);

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    
    const logIn = async (e) => {

        try {
        e.preventDefault();
        const response = await login(email, password);
        localStorage.setItem('token', response.data.token);
        
        setPassword('');
        setEmail('');
        
        } catch (e) {
            console.log(e);
        }
        setIsAuth(true);
        Router.push('/');

    }

    return (
        <div className={styles.FormStyle}>
            <div className={styles.FormCenter}>
                <h2>Авторизация</h2>
                <form onSubmit={logIn}>
                    <div className={styles.InputField}>
                        <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <span></span>
                        <label>E-mail</label>
                    </div>
                    <div className={styles.InputField}>
                        <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <span></span>
                        <label>Пароль</label>
                    </div>

                    <button className={styles.FormButton}
                    type="submit">Войти</button>

                    <div className={styles.signupLink}>
                        Нет аккаунта? 
                    <Link href='/signin'> Зарегистрируйтесь</Link>  
                    </div>
                    <div className={styles.signupLink}>
                        Или можно 
                    <Link href='/'> Перейти на главную</Link>  
                    </div>
                </form>    
            </div>
        </div>
    )
}

export default Auth;
