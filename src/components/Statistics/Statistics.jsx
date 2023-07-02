import { StatItem } from "./Stat-item.jsx"

export const Statistics = ({stats}) => {
  return <section className="statistics">
    <h2 className="title">Upload stats</h2>

    <ul className="stat-list">
      <StatItem stats={stats} />
    </ul>
  </section>
}