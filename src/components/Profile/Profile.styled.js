const { default: styled } = require('styled-components');

export const StyledUserContainer = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0;
  box-shadow: 2px 4px 4px black;
`;

export const StyledInfo = styled.div`
  padding-top: 25px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledImg = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #cccccc;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledName = styled.p`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
`;

export const StyledParagraph = styled.p`
  text-align: center;
  font-size: 24px;
  color: #777777;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  background-color: #dddddd;
  text-align: center;
  margin: 0;
  padding: 0;
  border-radius: 0 0 5px 5px;
`;

export const StyledListItem = styled.li`
  border: 1px solid #999999;
  padding: 10px 15px;
  font-size: 20px;
  color: #999999;

  :nth-child(1) {
    border-bottom-left-radius: 5px;
  }

  :nth-child(3) {
    border-bottom-right-radius: 5px;
  }
`;

export const StyledQuantity = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 500;
  color: #000000;
`;
