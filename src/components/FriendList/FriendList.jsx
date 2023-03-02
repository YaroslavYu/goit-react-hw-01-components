import PropTypes from 'prop-types';

import { StyledList, Friend, OnlineMarker, Name } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <StyledList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend key={id}>
          <OnlineMarker online={isOnline}>
            {/* {isOnline === true && 'online'} */}
          </OnlineMarker>
          <img src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </Friend>
      ))}
    </StyledList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
