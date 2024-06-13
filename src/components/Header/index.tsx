import { Button } from '../Button'
import styles from './index.module.css'
import { useState } from 'react'

export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <MenuMobile />
        <Menu />
      </nav>
    </header>
  )
}

function MenuMobile() {
  const [menuMobile, setMenuMobile] = useState(false)

  return (
    <div className={styles.menuMobile}>
      <button
        onClick={() => setMenuMobile((state) => !state)}
        className={styles.buttonToggle}
      >
        <img height={41} src="/icons/toggleMenu.svg" alt="menu" />
      </button>
      {menuMobile && <MenuContainer />}
    </div>
  )
}

function Menu() {
  return (
    <>
      <div className={styles.menu}>
        <MenuContainer />
      </div>
    </>
  )
}

function MenuContainer() {
  return (
    <>
      <a href="#" className={styles.logo}>
        <img height={41} src="images/hug.png" alt="#" />
      </a>
      <section className={styles.section}>
        <Button>Home</Button>
        <Button>Shop</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </section>
      <section className={`${styles.section} ${styles.containerIconsMobile}`}>
        <Button>
          <img src="/icons/mdi:account-alert-outline.svg" alt="#" />
        </Button>
        <Button>
          <img src="/icons/akar-icons:search.svg" alt="#" />
        </Button>
        <Button>
          <img src="/icons/akar-icons:heart.svg" alt="#" />
        </Button>
        <Button>
          <img src="/icons/ant-design:shopping-cart-outlined.svg" alt="#" />
        </Button>
      </section>
    </>
  )
}
