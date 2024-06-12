import hug from '../../assets/images/hug.png'
import userIcon from '../../assets/icons/mdi:account-alert-outline.svg'
import searchIcon from '../../assets/icons/akar-icons:search.svg'
import heartIcon from '../../assets/icons/akar-icons:heart.svg'
import cartIcon from '../../assets/icons/ant-design:shopping-cart-outlined.svg'
import menuToggle from '../../assets/icons/toggleMenu.svg'
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
        <img height={41} src={menuToggle} alt="menu" />
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
        <img height={41} src={hug} alt="#" />
      </a>
      <section className={styles.section}>
        <Button>Home</Button>
        <Button>Shop</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </section>
      <section className={`${styles.section} ${styles.containerIconsMobile}`}>
        <Button>
          <img src={userIcon} alt="#" />
        </Button>
        <Button>
          <img src={searchIcon} alt="#" />
        </Button>
        <Button>
          <img src={heartIcon} alt="#" />
        </Button>
        <Button>
          <img src={cartIcon} alt="#" />
        </Button>
      </section>
    </>
  )
}
