import PropTypes from "prop-types";

export const FriendItem = ({ friends }) => {
  return friends.map(({avatar, name, isOnline, id}) => {
    return (
      <li className="item" key={id}>
        <span className="status" style={isOnline ? {backgroundColor: "green"} : {backgroundColor: "red"}}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
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