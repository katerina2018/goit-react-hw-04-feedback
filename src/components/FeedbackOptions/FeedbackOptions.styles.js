import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  text-align: center;
`;
export const ButtonTag = styled.button`
  border-radius: 5px;
  margin: 5px;
  background-color: #d5d3f5;
  padding: 5px;
  min-width: 70px;
  font-weight: 600;
  transition: background-color 250ms linear, transform 250ms linear;

  :hover {
    background-color: #b6b4d1;
    transform: scale(1.1);
  }
`;
