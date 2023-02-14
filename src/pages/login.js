import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/Login.module.scss';

import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <div className={styles['login-form']}>
      <div className={styles['login-form-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <form action="/" className={styles.form} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input type="text" id="email" placeholder="platzi@example.com" className={`${styles.input} ${styles['input-email']}`} />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className={`${styles.input} ${styles['input-password']}`} />
          <button type="submit" className={`${styles['primary-button']} ${styles['login-button']}`} onClick={handleSubmit}>
            Login
          </button>
          <Link href="/">Forgot my password</Link>
        </form>
        <button className={`${styles['secondary-button']} ${styles['signup-button']}`}>Sign up</button>
      </div>
    </div>
  );
};

export default Login;
