import styles from './index.module.css'
export function CardHover() {
  return (
    <div className={styles.hover}>
      <button>See Details</button>
      <div>
        <button>
          <img src="icons/compare.svg" width={12} alt="" />
          Share
        </button>
        <button>
          <img src="icons/compare.svg" width={12} alt="" />
          Compare
        </button>
        <button>
          <img src="icons/heart.svg" width={12} alt="" />
          Like
        </button>
      </div>
    </div>
  )
}
