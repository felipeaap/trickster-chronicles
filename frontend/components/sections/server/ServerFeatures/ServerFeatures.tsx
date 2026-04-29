import styles from "./ServerFeatures.module.css"
import FeatureCard from "@/components/patterns/FeatureCard/FeatureCard"
import SectionHeroHeader from "@/components/ui/SectionHeroHeader/SectionHeroHeader"
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader"
import Starfield from "@/components/effects/Starfield"
export default function ServerFeatures() {
  return (
    <section className={styles.container}>
      <Starfield/>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
      <SectionHeroHeader
        title="Server Features"
      />
      <SectionHeader 
        title="Adventure"
      />
      <div className={styles.grid}>
        <FeatureCard
          title="Galder Convertion"
          description="Converta seus Galders em pontos de loja."
          icon="/assets/stickers/conv.png"
          color="blue"
        />
        <FeatureCard
          title="Higher Rates"
          description="Drops melhorados para acelerar sua progressão."
          icon="/assets/stickers/bfury.png"
          color="gold"
        />
        <FeatureCard
          title="AFK Drilling"
          description="Sistema de drilling justo via quest diária."
          icon="/assets/stickers/drill_mini.png"
          color="blue"
        />
        <FeatureCard
          title="Boss Drops"
          description="Maior chance de itens raros em bosses."
          icon="/assets/stickers/treasure.png"
          color="purple"
        />
        <FeatureCard
          title="Free Boss Hunt"
          description="Sem restrições de level para bosses."
          icon="/assets/stickers/tut.png"
          color="red"
        />
        
      </div>

      <SectionHeader 
        title="Expansions"
      />
      <div className={styles.grid}>
        <FeatureCard
          title="New Guild System"
          description="Enjoy the new guild interface and battles."
          icon="/assets/stickers/gems.png"
          color="blue"
        />
        <FeatureCard
          title="Paula"
          description="Paula and all new jobs related is avaliable."
          icon="/assets/stickers/polar.png"
          color="red"
        />
        <FeatureCard
          title="Surprises"
          description="Come play with us, many surprises awaits."
          icon="/assets/stickers/egg.png"
          color="purple"
        />
        <FeatureCard
          title="Evolutive Server"
          description="Many expansions will come with time, come play with us and enjoy the trickster that is and will be!"
          icon="/assets/stickers/gift.png"
          color="gold"
        />
        
      </div>
    </section>
  )
}