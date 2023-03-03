import PropTypes from 'prop-types';

import { StyledList } from './FriendList.styled';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <StyledList>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friendData={friend} />
      ))}
    </StyledList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
