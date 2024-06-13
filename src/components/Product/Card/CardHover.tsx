import heartIcon from '../../../assets/icons/heart.svg'
import shareIcon from '../../../assets/icons/share.svg'
import compareIcon from '../../../assets/icons/compare.svg'

import styles from './index.module.css'
export function CardHover() {
  return (
    <div className={styles.hover}>
      <button>See Details</button>
      <div>
        <button>
          <img src={shareIcon} width={12} alt="" />
          Share
        </button>
        <button>
          <img src={compareIcon} alt="" />
          Compare
        </button>
        <button>
          <img src={heartIcon} width={12} alt="" />
          Like
        </button>
      </div>
    </div>
  )
}
