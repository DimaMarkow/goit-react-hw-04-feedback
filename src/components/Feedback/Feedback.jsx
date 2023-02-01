import React from 'react';
import css from './feedback.module.css';
import Statistics from 'components/Feedback/Statistics/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import Section from 'components/Feedback/Section/Section';
import Notification from 'components/Feedback/Notification/Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class Feedback extends React.Component {
  state = { ...INITIAL_STATE };

  handleClick = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
    console.log(e.target.name);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state.good;
    const result = ((value / total) * 100).toFixed(0);
    return Number(result);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const buttonOptions = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonOptions}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default Feedback;
