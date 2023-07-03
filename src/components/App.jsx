import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.css";
import 'swiper/swiper.css';
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Swiper
        className="slider"
        // spaceBetween={50}
        slidesPerView={1}
        centeredSlides
        centerInsufficientSlides={true}
        loop
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >

      <SwiperSlide>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </SwiperSlide>
        
      <SwiperSlide>
        <Statistics stats={data} />
      </SwiperSlide>

      <SwiperSlide>
        <FriendList friends={friends} />
      </SwiperSlide>
      
      <SwiperSlide>
        <TransactionHistory items={transactions} />
      </SwiperSlide>
      
      </Swiper>
    </div>
  );
};
