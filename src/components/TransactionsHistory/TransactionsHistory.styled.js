import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 750px;
  text-align: center;
  font-size: 18px;
  border: 1px solid black;
  box-shadow: 2px 4px 4px black;
`;

export const StyledHeadCell = styled.th`
  padding: 10px 15px;
  background-color: cyan;
  color: #ffffff;
`;

export const StyledBodyRow = styled.tr`
  background-color: #ffffff;
  :nth-child(even) {
    background-color: #dddddd;
  }
`;

export const StyledRegularCell = styled.td`
  padding: 10px;
`;
