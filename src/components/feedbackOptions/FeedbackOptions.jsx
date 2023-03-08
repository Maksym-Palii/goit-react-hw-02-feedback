import css from "components/feedbackOptions/FeedbackOptions.module.css"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
        <button className={css.btn} type="button" name="good" onClick={onLeaveFeedback}>Good</button>
          <button className={css.btn} type="button" name="neutral" onClick={onLeaveFeedback}>Neutral</button>
          <button className={css.btn} type="button" name="bad" onClick={onLeaveFeedback}>Bad</button>
        </div>
    )
}