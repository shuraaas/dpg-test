import styles from './MonthLabels.module.scss';

export const MonthLabels = ({ weeks, monthLabels }) => {
  return (
    <ul className={styles.monthLabels}>
      {weeks.map(
        (week, id) =>
          monthLabels[id] && (
            <li key={id}>
              <span>{monthLabels[id]}</span>
            </li>
          ),
      )}
    </ul>
  );
};
