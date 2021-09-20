import React from 'react';
import styles from './../auth/auth.module.css';
import Link from 'next/link';

const Auth = () => {
    return (
        <div className={styles.FormStyle}>
            <div className={styles.FormCenter}>
                <h2>Авторизация</h2>
                <form >
                    <div className={styles.InputField}>
                        <input type="email"></input>
                        <span></span>
                        <label>E-mail</label>
                    </div>
                    <div className={styles.InputField}>
                        <input type="password"></input>
                        <span></span>
                        <label>Пароль</label>
                    </div>
                    <button className={styles.FormButton}>Регистрация</button>
                    <div class={styles.signupLink}>
                        Есть аккаунт? 
                    <Link href='/auth'> Войдите</Link>  
                    </div>
                    <div class={styles.signupLink}>
                        Или можно 
                    <Link href='/'> Перейти на главную</Link>  
                    </div>
                </form>    
            </div>
        </div>
    )
}

export default Auth;
