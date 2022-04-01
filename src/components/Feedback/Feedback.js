import { useState } from 'react';

import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Statistics from '../Statistics';



const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const optionsFeedback = { good, neutral, bad };

  const onLeaveFeedback = label => {
    switch (label) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return bad ? Number.parseInt(100 - (bad * 100) / (bad + good)) : 100;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsFeedback}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

export default Feedback;


