import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import stats from '../data/data.json';
import friendList from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} />
      <FriendList friendList={friendList} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
