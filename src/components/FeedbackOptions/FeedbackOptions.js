import React from 'react';
import { ButtonWrapper, ButtonTag } from './FeedbackOptions.styles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {Object.keys(options).map(elem => (
        <ButtonTag
          key={elem}
          type="button"
          onClick={() => onLeaveFeedback(elem)}
        >
          {elem}
        </ButtonTag>
      ))}
    </ButtonWrapper>
  );
};

export default FeedbackOptions;
