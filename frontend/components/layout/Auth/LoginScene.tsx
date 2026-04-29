import styles from './Login.module.css'
import LoginLauncher from './LoginLauncher'
import Starfield from '@/components/effects/Starfield'

type AuthMode = 'login' | 'register' | 'forgot'

type Props = {
  onClose: () => void
  initialMode?: AuthMode
}

export default function LoginScene({
  onClose,
  initialMode = 'login'
}: Props) {

  return (
    <div className={styles.sceneRoot}>
      <Starfield />

      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />

      <div className={styles.scene}>
        <LoginLauncher
          onClose={onClose}
          initialMode={initialMode}
        />
      </div>
    </div>
  )
}