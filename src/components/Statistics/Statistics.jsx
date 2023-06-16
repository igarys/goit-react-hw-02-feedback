import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <span className={css.stats}>Good: {good}</span>
    <span className={css.stats}>Neutral: {neutral}</span>
    <span className={css.stats}>Bad: {bad}</span>
    <p>Total:{total}</p>
    <p>Positive feedback:{positivePercentage}%</p>
  </div>
);
   
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}