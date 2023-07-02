import {FriendItem} from './FriendItem.jsx'
 
export const FriendList = ({friends}) => {
  return <ul className="friend-list">
    <FriendItem friends={friends} />
  </ul>
}