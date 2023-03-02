import {
  userData,
  statsData,
  friendsData,
  transactionsData,
} from '../source-data-JSON';
import Profile from './Profile/Profile';
import Statistic from './Statistic/Statistic';
import FriendList from './FriendList/FriendList';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={userData} />
      <Statistic data={statsData.default} title="Upload stats" />
      <Statistic data={statsData.default} />
      <FriendList friends={friendsData.default} />
      <TransactionsHistory transactions={transactionsData.default} />
    </div>
  );
};
