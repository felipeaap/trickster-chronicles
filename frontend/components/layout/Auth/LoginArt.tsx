import styles from './Login.module.css'
import Image from 'next/image'

export default function LoginArt(){

  return (
    <div className={styles.panelArt}>

      <Image
        src="/assets/login.png"
        alt="character"
        fill
        className={styles.char}
      />

    </div>
  )
}