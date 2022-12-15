import PropTypes from 'prop-types';

import {
  TransactionHistoryStyled,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryStyled>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type} </Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </TransactionHistoryStyled>
  );
};

TransactionHistory.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
