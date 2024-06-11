import { useState } from 'react'
import styles from './index.module.css'
import { validEmail } from '../../utils/validEmail'
export function Footer() {
  const [email, setEmail] = useState('')

  let emailErrorMsg = 'Digite um email válido'
  const emailValid = validEmail(email)

  if (emailValid || !email) emailErrorMsg = ''

  return (
    <footer className={styles.container}>
      <div className={styles.nav}>
        <h3>footer.</h3>
        <span>
          Rua Alexandre Dumas, 1711 - 6º andar - Chácara Santo Antônio, São
          Paulo - SP, 04717-004
        </span>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.nav}>
          <span>Links</span>
          <a>Home</a>
          <a>Shop</a>
          <a>About</a>
          <a>Contact</a>
        </div>
        <div className={styles.nav}>
          <span>Help</span>
          <a>Payment Options</a>
          <a>Returns</a>
          <a>Privacy Policies</a>
        </div>
      </div>
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
      <div className={styles.copyright}>
        <span>2024 Compass UOL</span>
      </div>
    </footer>
  )
}
