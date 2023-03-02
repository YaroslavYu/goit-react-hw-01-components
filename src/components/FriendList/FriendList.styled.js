import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  /* background-color: #dddddd; */
  padding: 0;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  padding: 15px 25px;
  background-color: yellow;
  box-shadow: 2px 4px 4px black;
`;

export const OnlineMarker = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${status => {
    return status.online ? 'green' : 'red';
  }};
`;

export const Name = styled.p`
  font-size: 24px;
  margin: 0;
`;
