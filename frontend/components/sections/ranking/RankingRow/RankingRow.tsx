import Image from 'next/image'
import styles from './RankingRow.module.css'
import { Player } from '@/types/ranking'

type Props = {
  player: Player
  rank: number
}

function RankMedal({ rank }: { rank:number }){

    const colors = {
      1:'#FFD700',
      2:'#C8D8E8',
      3:'#D4844A'
    }
  
    return (
      <span
        style={{
          color: colors[rank as 1|2|3],
          fontWeight:700,
          textShadow:`0 0 10px ${colors[rank as 1|2|3]}`
        }}
      >
        #{rank}
      </span>
    )
  }

export default function RankingRow({ player, rank }: Props){

    const isTop3 = rank <= 3

  return (
    <tr className={styles.row}>

      {/* RANK */}
      <td className={styles.rank}>
        {isTop3 ? <RankMedal rank={rank} /> : rank}
      </td>

      {/* NAME */}
      <td className={styles.name}>
        {player.name}
      </td>

      {/* RACE */}
      <td>
        <Image
          src={`/assets/icons/${player.race}.png`}
          alt={player.race}
          width={22}
          height={22}
        />
      </td>

      <td>{player.level}</td>
      <td>{player.tmlv}</td>

      <td className={styles.guild}>
        {player.guild}
      </td>

      <td className={styles.exp}>
        {player.exp}
      </td>

    </tr>
  )
}