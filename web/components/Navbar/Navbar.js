import styles from '../../styles/components/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {

  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.link}>Analytics</a>
      </Link>
      <Link href="/admin">
        <a className={styles.link}>Admin</a>
      </Link>
    </div >
  )
}

export default Navbar
