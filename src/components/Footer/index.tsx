import { useState } from 'react'
import styles from './index.module.css'
import { validEmail } from '../../utils/validEmail'

export function Footer() {
  return (
    <footer className={styles.container}>
      <Address />
      <Menu />
      <Newsletter />
      <Copyright />
    </footer>
  )
}

function Address() {
  return (
    <div className={styles.nav}>
      <h3>footer.</h3>
      <span>
        Rua Alexandre Dumas, 1711 - 6º andar - Chácara Santo Antônio, São Paulo
        - SP, 04717-004
      </span>
    </div>
  )
}

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.nav}>
        <span>Links</span>
        <a className={styles.btn}>Home</a>
        <a className={styles.btn}>Shop</a>
        <a className={styles.btn}>About</a>
        <a className={styles.btn}>Contact</a>
      </div>
      <div className={styles.nav}>
        <span>Help</span>
        <a className={styles.btn}>Payment Options</a>
        <a className={styles.btn}>Returns</a>
        <a className={styles.btn}>Privacy Policies</a>
      </div>
    </div>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')

  let emailErrorMsg = 'Please enter a valid email address'
  const emailValid = validEmail(email)

  if (emailValid || !email) emailErrorMsg = ''
  return (
    <div className={styles.nav}>
      <span>Newsletter</span>
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email Address"
        />
        <button disabled={!emailValid}>SUBSCRIBE</button>
      </div>
      <p className={styles.msgError}>{emailErrorMsg}</p>
    </div>
  )
}

function Copyright() {
  return (
    <div className={styles.copyright}>
      <span>2024 Compass UOL</span>
    </div>
  )
}
