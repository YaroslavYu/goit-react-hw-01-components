import PropTypes from 'prop-types';

import {
  StyledList,
  StyledListItem,
  Styledpercentage,
} from './Statistic.styled';

import getRandomColor from './getRandomColor';

export default function List({ items }) {
  return (
    <StyledList>
      {items.map(({ id, label, percentage }) => (
        <StyledListItem key={id} style={{ backgroundColor: getRandomColor() }}>
          <span>{label}</span>
          <Styledpercentage>{percentage}</Styledpercentage>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
