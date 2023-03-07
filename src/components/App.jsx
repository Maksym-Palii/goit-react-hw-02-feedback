import { Notification } from "components/notification/Notification";
import React, {Component} from "react";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Section } from "./section/Section";
import { Statistics } from "./statistics/Statistics";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  hadleIncrement = (evt) => {
    const { name }=evt.target
     this.setState((prevState) => ({
      [name]: prevState[name] + 1,
      })
    )
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    // return good + neutral + bad
    console.log(good + neutral + bad)
  }

  render() {
    const { good, neutral, bad } = this.state

    const total = good+neutral+bad
    const positivFeedback = +Math.round(good / total * 100)  

      
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.hadleIncrement} />
        </Section>
        
        <Section title="Statistics">
          {good === 0 && neutral === 0 && bad === 0 ? <Notification message="There is no feedback" /> :
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivFeedback} /> }
        </Section>
        
        

        {/* options={} */}

        {/* <div>
          <button type="button" name="good" onClick={this.hadleIncrement}>Good</button>
          <button type="button" name="neutral" onClick={this.hadleIncrement}>Neutral</button>
          <button type="button" name="bad" onClick={this.hadleIncrement}>Bad</button>
        </div> */}     
      </>    
  );
  }
};
