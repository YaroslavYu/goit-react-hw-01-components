import PropTypes from 'prop-types';

import {
  StyledTable,
  StyledHeadCell,
  StyledBodyRow,
  StyledRegularCell,
} from './TransactionsHistory.styled';

export default function TransactionsHistory({ transactions }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledHeadCell>Type</StyledHeadCell>
          <StyledHeadCell>Amount</StyledHeadCell>
          <StyledHeadCell>Currency</StyledHeadCell>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <StyledBodyRow key={id}>
            <StyledRegularCell>{type}</StyledRegularCell>
            <StyledRegularCell>{amount}</StyledRegularCell>
            <StyledRegularCell>{currency}</StyledRegularCell>
          </StyledBodyRow>
        ))}
      </tbody>
    </StyledTable>
  );
}

TransactionsHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
