import { DayCell } from '@components';
import { format } from 'date-fns';
import styles from './WeekColumn.module.scss';

export const WeekColumn = ({ week, data }) => {
  const iso = date => format(date, 'yyyy-MM-dd');

  return (
    <ul className={styles.weekColumn}>
      {week.map(day => (
        <DayCell
          key={iso(day)}
          day={day}
          contributions={{ count: data[iso(day)] }}
        />
      ))}
    </ul>
  );
};
