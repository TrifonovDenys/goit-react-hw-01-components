import PropTypes from "prop-types";

export const TransactionHistoryBody = ({ items }) => {
  return items.map(({type, amount, currency, id}) => {
    return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
  })
}
TransactionHistoryBody.propType = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired, 
   })).isRequired
}