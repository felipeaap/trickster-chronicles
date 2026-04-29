import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>

        <div className={styles.footerTop}>

          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>Trickster Chronicles</div>
            <div className={styles.footerTagline}>
              Trickster Online — Private Server
              <br />
              Online Gaming Services · Global Operation
            </div>
          </div>

          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Navigate</div>
            <Link href="/"         className={styles.footerLink}>Home</Link>
            <Link href="/news"     className={styles.footerLink}>News</Link>
            <Link href="/features" className={styles.footerLink}>Features</Link>
            <Link href="/ranking"  className={styles.footerLink}>Ranking</Link>
          </div>

          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Account</div>
            <Link href="/register" className={styles.footerLink}>Register</Link>
            <Link href="/login"    className={styles.footerLink}>Login</Link>
            <Link href="/donate"   className={styles.footerLink}>Donate</Link>
            <Link href="/download" className={styles.footerLink}>Download</Link>
          </div>

          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>Support</div>
            <Link href="/terms"   className={styles.footerLink}>Terms of Service</Link>
            <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
            <Link href="/support" className={styles.footerLink}>Customer Support</Link>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <span className={styles.footerCopy}>
            © 2026 Trickster Chronicles · Trickster Online Private Server · support@thchronicles.net
          </span>

          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerDiscordBtn}
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              style={{ width: 14, height: 14, flexShrink: 0 }}
            >
              <path d="M13.5 2.5A13.2 13.2 0 0 0 10.2 1.5c-.14.26-.3.6-.41.88a12.3 12.3 0 0 0-3.58 0A9.3 9.3 0 0 0 5.8 1.5 13.2 13.2 0 0 0 2.5 2.5 13.8 13.8 0 0 0 .5 11.7a13.3 13.3 0 0 0 4 2c.32-.44.6-.9.85-1.4a8.7 8.7 0 0 1-1.34-.64l.32-.25a9.6 9.6 0 0 0 8.34 0l.33.25a8.7 8.7 0 0 1-1.35.65c.25.5.53.96.85 1.4a13.3 13.3 0 0 0 4-2A13.8 13.8 0 0 0 13.5 2.5ZM5.68 9.75c-.77 0-1.4-.7-1.4-1.56s.62-1.56 1.4-1.56c.77 0 1.4.7 1.4 1.56s-.63 1.56-1.4 1.56Zm4.64 0c-.77 0-1.4-.7-1.4-1.56s.62-1.56 1.4-1.56c.77 0 1.4.7 1.4 1.56s-.63 1.56-1.4 1.56Z" />
            </svg>
            Join Discord
          </a>
        </div>

      </div>
    </footer>
  );
}