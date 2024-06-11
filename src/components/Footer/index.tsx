import styles from './index.module.css'
export function Footer() {
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
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
          />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>2024 Compass UOL</span>
      </div>
    </footer>
  )
}
