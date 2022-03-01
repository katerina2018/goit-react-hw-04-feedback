import { useState } from 'react';

import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Statistics from '../Statistics';

import './Feedback.css';

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

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = label => {
//     this.setState(prevState => ({
//       [label]: prevState[label] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const totalFeedback = Object.values(this.state);
//     return totalFeedback.reduce((previousValue, number) => {
//       return previousValue + number;
//     }, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return this.state.bad
//       ? Number.parseInt(
//           100 - (this.state.bad * 100) / (this.state.bad + this.state.good),
//         )
//       : 100;
//   };

//   render() {
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {!this.countTotalFeedback() ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default Feedback;
