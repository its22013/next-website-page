import styles from '../styles/phone.module.css'

export default function Home () {
  return (
    <div className={styles.nav}>
      <ul id='nav'>
        <li><a href='#'>TOP</a></li>
        <li><a href='#'>ABOUT</a></li>
        <li><a href='#'>NEWS</a></li>
        <li><a href='#'>LINK</a></li>
      </ul>
    </div>
  )
}
