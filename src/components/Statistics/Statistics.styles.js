import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  list-style: none;
  padding: 5px;
  font-size: 1.1em;
`;

export const StatisticsItem = styled.li`
  margin: 5px;
`;

export const TotalResult = styled.li`
  border-top: 2px solid #0d1356;
  margin: 5px;
  font-weight: 600;
`;
export const PositiveFeedback = styled.li`
  background-color: ${props => (props.value > 49 ? '#62c362' : '#ffb0b0')};
  margin: 10px 5px 5px;
  padding: 5px;
  font-weight: 600;
  text-align: center;
  border-radius: 10px;
`;
