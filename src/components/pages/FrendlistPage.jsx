import React from 'react'
import Header from 'components/Header/Header'
import { FriendItem } from 'components/FriendList/FriendItem'
import css from 'components/FriendList/FriendList.module.css'
export const FriendList = ({friends}) => {
  return (
    <>
    <Header />
    
  <ul className={css.friendlist}>
    <FriendItem friends={friends} />
  </ul>
    </>
  )
}

export default FriendList
