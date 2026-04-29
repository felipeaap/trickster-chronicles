import styles from "./DownloadSection.module.css"
import SectionHeroHeader from "@/components/ui/SectionHeroHeader/SectionHeroHeader"
import DownloadCard from "@/components/patterns/DownloadCard/DownloadCard"
import Starfield from "@/components/effects/Starfield"

export default function DownloadSection() {
  return (
    <section className={styles.container}>
      <Starfield/>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
      <SectionHeroHeader 
        title="Downloads" 
      />

      <div className={styles.grid}>
        <DownloadCard
          title="Instalador Oficial"
          description="Download direto com instalador automático"
          size="2.1 GB"
          highlight="primary"
          actionLabel="Download"
        />

        <DownloadCard
          title="Cliente Compactado"
          description="Versão .zip para instalação manual"
          size="1.8 GB"
          highlight="secondary"
          actionLabel="Baixar ZIP"
        />

        <DownloadCard
          title="Torrent"
          description="Download via P2P mais rápido e estável"
          size="2.1 GB"
          highlight="accent"
          actionLabel="Baixar Torrent"
        />

        <DownloadCard
          title="MEGA"
          description="Download via plataforma MEGA"
          size="2.1 GB"
          highlight="primary"
          actionLabel="Abrir MEGA"
        />

        <DownloadCard
          title="Google Drive Mirror"
          description="Link alternativo para fallback"
          size="2.1 GB"
          highlight="secondary"
          actionLabel="Abrir Drive"
        />
      </div>
    </section>
  )
}