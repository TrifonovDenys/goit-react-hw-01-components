import { StatItem } from "./Stat-item.jsx"
import css from './Statistics.module.css'

export const Statistics = ({stats}) => {
  return <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>

    <ul className={css.statlist}>
      <StatItem stats={stats} />
    </ul>
  </section>
}