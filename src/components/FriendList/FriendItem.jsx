import PropTypes from "prop-types";
import css from './FriendList.module.css'
export const FriendItem = ({ friends }) => {
  return friends.map(({avatar, name, isOnline, id}) => {
    return (
      <li className={css.item} key={id}>
      <span className = {css.status} style={isOnline ? {backgroundColor: "green"} : {backgroundColor: "red"}}></span>
          <img className = {css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className = {css.name} >{name}</p>
      </li>
    )
  })
}

FriendItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired
}