import PropTypes from "prop-types";
import css from './Statistics.module.css'
import { bgColor } from "../../getRandomColor";
export const StatItem = ({ stats }) => {
  return stats.map((stat) => {
    return <li key={stat.id} className={css.item} style={{backgroundColor: bgColor()}}>
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}%</span>
      </li>
    })
}

StatItem.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
})).isRequired
}
