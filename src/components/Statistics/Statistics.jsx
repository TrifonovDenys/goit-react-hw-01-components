import { StatItem } from "./Stat-item.jsx"
import css from './Statistics.module.css'
import PropTypes from "prop-types";
export const Statistics = ({stats, title}) => {
  return <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul className={css.statlist}>
      <StatItem stats={stats} />
    </ul>
  </section>
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
}