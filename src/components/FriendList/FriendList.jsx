import PropTypes from "prop-types";
import { FriendItem } from './FriendItem.jsx'
import css from './FriendList.module.css'

export const FriendList = ({friends}) => {
  return <ul className={css.friendlist}>
    <FriendItem friends={friends} />
  </ul>
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
}