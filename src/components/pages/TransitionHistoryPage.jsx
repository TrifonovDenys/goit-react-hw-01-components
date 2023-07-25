import Header from 'components/Header/Header'
import React from 'react'
import { TransactionHistoryBody } from 'components/TransactionHistory/TransactionHistoryBody'
import css from 'components/TransactionHistory/TransactionHistory.module.css'
export const TransitionHistory = ({items}) => {
  return (
    <>
     <Header/>
      <table className={css.transactionhistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <TransactionHistoryBody items = {items}/>
      </tbody>
    </table>
    </>
  )
}

export default TransitionHistory
