import {TransactionHistoryBody} from './TransactionHistoryBody.jsx'
import css from './TransactionHistory.module.css'
export const TransactionHistory = ({items}) => {
  return (
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
    </table>)
}