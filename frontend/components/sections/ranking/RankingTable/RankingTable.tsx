import Image from 'next/image'
import styles from "./RankingTable.module.css";
import { Player } from "@/types/ranking";
import TrophyIcon from '@/components/ui/icons/TrophyIcon'
import clsx from 'clsx'

interface Props {
  players: Player[]
  limit?: number
  variant?: 'default' | 'home'
}

export default function RankingTable({ players, limit, variant = 'default'}: Props) {

  const data = limit ? players.slice(0, limit) : players

  return (
    <div className={styles.wrap}>
      <table className={clsx(
        styles.table,
        variant === 'home' && styles.home
      )}>

        {variant !== 'home' && (
          <thead>
            <tr>
              <th>#</th>
              <th>Character</th>
              <th>Job</th>
              <th>Lv</th>
              <th>TM</th>
              <th>Guild</th>
              <th>EXP</th>
            </tr>
          </thead>
        )}

        <tbody>
          {data.map((p, i) => {
            const rank = i + 1
            const isTop3 = rank <= 3

            return (
              <tr key={p.name} className={styles.row}>

              <td className={styles.rank}>
                {rank <= 3 ? (
                  <div className={styles.topRank}>
                    <TrophyIcon rank={rank as 1 | 2 | 3} />

                    <span className={styles[`top${rank}`]}>
                      #{rank}
                    </span>
                  </div>
                ) : (
                  <span className={styles.normalRank}>
                    {rank}
                  </span>
                )}
              </td>

                <td className={styles.name}>{p.name}</td>

                <td>
                  <Image src={p.jobIcon} alt="job" width={22} height={22} />
                </td>

                <td>{p.level}</td>
                <td>{p.tmlv}</td>

                <td className={styles.guild}>{p.guild}</td>

                <td className={styles.exp}>
                  {p.exp.toLocaleString()}
                </td>

              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  )
}