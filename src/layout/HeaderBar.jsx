import styles from '@/styles/HeaderBar.module.css'
import Heading from "../components/Heading";

function HeaderBar() {
  return (
    <header className={`${styles.container} bg-indigo-900 text-indigo-50`}>
      <Heading />
    </header>
  )
}

export default HeaderBar;