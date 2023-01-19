import styles from '../styles/layout.module.css'

export default function Home () {
  return (
    <div className={styles.contents}>
      <h1>Layout</h1>
      <div className={styles.grid_column}>
        <div className={styles.box}>
          <h2>Box 1</h2>
          <p>
            hello world hello world hello world hello world hello world hello world hello world hello world
          </p>
        </div>
        <div className={styles.box}>
          <h2>Box 2</h2>
          <p>
            hello world hello world hello world hello world hello world hello world hello world hello world
          </p>
        </div>
      </div>

      <div className={styles.grid_column}>
        <div className={styles.box}>
          <h2>Box 3</h2>
          <p>
            hello world hello world hello world hello world hello world hello world hello world hello world
          </p>
        </div>
        <div className={styles.box}>
          <h2>Box 4</h2>
          <p>
            hello world hello world hello world hello world hello world hello world hello world hello world
          </p>
        </div>
      </div>
    </div>
  )
}
