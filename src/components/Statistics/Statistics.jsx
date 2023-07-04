import PropTypes from "prop-types";
import { StatItem } from "./Stat-item.jsx"
import css from './Statistics.module.css'

export const Statistics = ({title, stats}) => {
  return (<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statlist}>
      <StatItem stats={stats} />
    </ul>
  </section>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}