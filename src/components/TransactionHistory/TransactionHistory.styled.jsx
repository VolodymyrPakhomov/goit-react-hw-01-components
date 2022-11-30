import styled from '@emotion/styled';

export const TransactionHistoryStyled = styled.table`
  width: 360px;
  border: 15px solid #9f9f9f;
  border-collapse: separate;
  border-radius: 4px;
  margin-bottom: 64px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 8px 8px 20px -6px rgba(212, 175, 55, 0.6);
`;

export const Tbody = styled.tbody`
  text-align: center;
`;

export const Thead = styled.thead`
  color: #000000;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  padding: 12px;
  border: 1px solid #000000;
  background: #fafafa;
  color: #000000 ;
`;

export const Th = styled.th`
  font-weight: bold;
  padding: 12px;
  background: #f2fcfc ;
  border: 1px solid #757575;
`;
export const Td = styled.td`
  padding: 12px;
  border: 1px solid #757575;
    background-color: #f2fcfc;
  color: #000000;
`;