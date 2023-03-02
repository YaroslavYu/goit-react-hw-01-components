import PropTypes from 'prop-types';

import { StyledListItem, StyledQuantity } from './Profile.styled';

export default function ListItem({ entity, quantity }) {
  return (
    <StyledListItem>
      <span>{entity}</span>
      <StyledQuantity>{quantity}</StyledQuantity>
    </StyledListItem>
  );
}

ListItem.propTypes = {
  entity: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
