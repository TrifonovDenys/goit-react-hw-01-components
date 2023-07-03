import {FriendItem} from './FriendItem.jsx'
import css from './FriendList.module.css'

export const FriendList = ({friends}) => {
  return <ul className={css.friendlist}>
    <FriendItem friends={friends} />
  </ul>
}