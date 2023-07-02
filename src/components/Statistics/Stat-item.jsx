import PropTypes from "prop-types";


export const StatItem = ({ stats }) => {
  return stats.map((stat) => {
      return <li key={stat.id} className="item">
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}</span>
      </li>
    })
}

StatItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
}
