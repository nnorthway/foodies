import Link from "next/link";
import Image from "next/image"
import Navlink from "./navlink.jsx"
import logo from "@/assets/logo.png"
import HeaderBackground from "./header-background.jsx"
import styles from "./navigation.module.css"

export default function Navigation() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="A plate with food on it" priority /> 
          NextLevelFood
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li><Navlink href="/meals">Browse Meals</Navlink></li>
            <li><Navlink href="/community">Foodies Community</Navlink></li>
          </ul>
        </nav>
      </header>
    </>
  )
}