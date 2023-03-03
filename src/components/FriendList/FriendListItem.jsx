import PropTypes from 'prop-types';

import { Friend, OnlineMarker, Name } from './FriendList.styled';

export default function FriendListItem({
  friendData: { isOnline, avatar, name },
}) {
  return (
    <Friend>
      <OnlineMarker online={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Friend>
  );
}

FriendListItem.propTypes = {
  friendData: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
