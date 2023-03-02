import PropTypes from 'prop-types';
import List from './List';
import { StyledSection } from './Statistic.styled';

export default function Statistic({ data, title }) {
  return (
    <StyledSection>
      {title && <h2>{title}</h2>}
      <List items={data} />
    </StyledSection>
  );
}

Statistic.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
};
