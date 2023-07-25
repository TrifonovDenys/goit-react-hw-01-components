// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper'
// import 'swiper/swiper.css';
// import 'swiper/css/navigation';
// import './swiper-style.css';
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json';
import transactions from '../transactions.json';
// import { Profile } from './Profile/Profile.jsx';
// import { Statistics } from './Statistics/Statistics.jsx';
// import { FriendList } from './FriendList/FriendList';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Route, Routes } from 'react-router-dom'
import FriendList from './pages/FrendlistPage';
import Statistics from './pages/StatisticsPage';
import Profile from './pages/ProfilePage';
import TransitionHistory from './pages/TransitionHistoryPage';
import HomePage from './pages/HomePage';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        centeredSlides
        centerInsufficientSlides={true}
        navigation
        loop
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
      
      </Swiper> */}
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/friendlist' element={<FriendList friends={friends}/>} />
        <Route path='/statistic' element={<Statistics stats={data}/>} />
        <Route path='/profile' element={<Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}/>} />
        <Route path='/transitionhistory' element={<TransitionHistory items={transactions}/>} />
    </Routes>

    </div>
  );
};
