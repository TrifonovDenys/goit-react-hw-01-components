import {TransactionHistoryBody} from './TransactionHistoryBody.jsx'

export const TransactionHistory = ({items}) => {
  return (
    <table className="transaction-history">
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