import PropTypes from 'prop-types';

import {
  StyledImg,
  StyledName,
  StyledParagraph,
  StyledList,
  StyledUserContainer,
  StyledInfo,
} from './Profile.styled';

import StyledListItem from './ProfileListItem';

export default function Profile({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <StyledUserContainer>
      <StyledInfo>
        <StyledImg src={avatar} alt="User avatar" />
        <StyledName>{username}</StyledName>
        <StyledParagraph>@{tag}</StyledParagraph>
        <StyledParagraph>{location}</StyledParagraph>
      </StyledInfo>

      <StyledList>
        <StyledListItem entity="Followers" quantity={followers} />
        <StyledListItem entity="Views" quantity={views} />
        <StyledListItem entity="Likes" quantity={likes} />
      </StyledList>
    </StyledUserContainer>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape().isRequired,
  }).isRequired,
};
