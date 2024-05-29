import React, { Component } from "react";
import PropTypes from "prop-types";
import { FeedbackBox, Button, ListStatistics } from "./Feedback.styled";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddFeedback = (e) => {
    console.log(e.target.name);
    const nameButton = e.target.name;

    this.setState((prevState) => ({
      [nameButton]: prevState[nameButton] + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    const totalFeedback = this.countTotalFeedback({ good, neutral, bad });
    return totalFeedback === 0 ? 0 : ((good + neutral) / totalFeedback) * 100;
  };

  render() {
    return (
      <FeedbackBox>
        <h1>Please leave feedback</h1>
        <div>
          <Button type="button" name="good" onClick={this.handleAddFeedback}>
            Good
          </Button>
          <Button type="button" name="neutral" onClick={this.handleAddFeedback}>
            Neutral
          </Button>
          <Button type="button" name="bad" onClick={this.handleAddFeedback}>
            Bad
          </Button>
        </div>

        <ListStatistics>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
          <li>Total: {this.countTotalFeedback(this.state)}</li>
          <li>
            Positive feedback:
            {this.countPositiveFeedbackPercentage(this.state)}
          </li>
        </ListStatistics>
      </FeedbackBox>
    );
  }
}

export default Feedback;
