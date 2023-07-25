import Header from 'components/Header/Header'
import React from 'react'
import PropTypes from "prop-types";
import { StatItem } from "components/Statistics/Stat-item.jsx"
import css from 'components/Statistics/Statistics.module.css'

export const Statistics = ({title, stats}) => {
  return (
    <>
      <Header/>
      <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statlist}>
      <StatItem stats={stats} />
    </ul>
  </section>
    </>
  )
}

export default Statistics

Statistics.propTypes = {
    title: PropTypes.string
}