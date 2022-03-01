import React from 'react';
import PropTypes from 'prop-types';
import {
  TotalResult,
  PositiveFeedback,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <span className="statistics-title">Good:</span> {good}
      </StatisticsItem>
      <StatisticsItem>
        <span>Neutral: </span> {neutral}
      </StatisticsItem>
      <StatisticsItem>
        <span>Bad: </span> {bad}
      </StatisticsItem>
      <TotalResult>
        <span>Total: </span>
        {total}
      </TotalResult>
      <PositiveFeedback value={positivePercentage}>
        <span>Positive percentage: </span>
        {positivePercentage}%
      </PositiveFeedback>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default Statistics;
