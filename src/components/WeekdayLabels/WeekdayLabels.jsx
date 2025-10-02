import styles from './WeekdayLabels.module.scss';
import clsx from 'clsx';

export const WeekdayLabels = ({ days }) => {
  return (
    <ul className={styles.weekdayLabels}>
      {days?.map(({ name, isHidden }, index) => (
        <li key={index} className={clsx({ [styles.isHidden]: isHidden })}>
          {name}
        </li>
      ))}
    </ul>
  );
};
