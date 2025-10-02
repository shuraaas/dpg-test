import { DayCell } from '@components';
import styles from './Legend.module.scss';

export const Legend = () => {
  return (
    <div className={styles.legend}>
      <span>Меньше</span>
      <ul className={styles.legendSquares}>
        <DayCell contributions={{ count: 0, text: 'No' }} />
        <DayCell contributions={{ count: 5, text: '1-9' }} />
        <DayCell contributions={{ count: 15, text: '10-19' }} />
        <DayCell contributions={{ count: 25, text: '20-29' }} />
        <DayCell contributions={{ count: 35, text: '30+' }} />
      </ul>
      <span>Больше</span>
    </div>
  );
};
