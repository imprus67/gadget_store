import React, {useState, useContext} from 'react';
import styles from './../auth/auth.module.css';
import Link from 'next/link';
import { registration } from '../../http/userAPI';
import Router from 'next/router';
import MainContext from '../../context/MainContext';

const Auth = () => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const {isAuth, setIsAuth} = useContext(MainContext);


        const login = async (e) => {

        try {

            e.preventDefault();
            
            const response = await registration(email, password);
            localStorage.setItem('token', response.data.token)
            setPassword('');
            setEmail('');
            setIsAuth(true);
            Router.push('/');

            } catch (e) {
                console.log(e.response.data.message);
            }


    }



    return (
        <div className={styles.FormStyle}>
            <div className={styles.FormCenter}>
                <h2>Авторизация</h2>
                <form onSubmit={login}>
                    <div className={styles.InputField}>
                        <input type="email"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                        ></input>
                        <span></span>
                        <label>E-mail</label>
                    </div>
                    <div className={styles.InputField}>
                        <input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        ></input>
                        <span></span>
                        <label>Пароль</label>
                    </div>
                    <button className={styles.FormButton}
                    type="submit"
                    >Регистрация</button>
                    <div className={styles.signupLink}>
                        Есть аккаунт? 
                    <Link href='/auth'> Войдите</Link>  
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
