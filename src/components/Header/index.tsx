import hug from '../../assets/images/hug.png'
import userIcon from '../../assets/icons/mdi:account-alert-outline.svg'
import searchIcon from '../../assets/icons/akar-icons:search.svg'
import heartIcon from '../../assets/icons/akar-icons:heart.svg'
import cartIcon from '../../assets/icons/ant-design:shopping-cart-outlined.svg'
import { Button } from '../Button'
import styles from './index.module.css'

export function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img height={32} src={hug} alt="" />
        </div>
        <nav>
          <Button>Home</Button>
          <Button>Shop</Button>
          <Button>About</Button>
          <Button>Contact</Button>
        </nav>
        <nav className={styles.iconsContainer}>
          <Button>
            <img src={userIcon} alt="" />
          </Button>
          <Button>
            <img src={searchIcon} alt="" />
          </Button>
          <Button>
            <img src={heartIcon} alt="" />
          </Button>
          <Button>
            <img src={cartIcon} alt="" />
          </Button>
        </nav>
      </div>
    </header>
  )
}
