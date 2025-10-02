import { DayCell } from '@components';
import styles from './Legend.module.scss';

export const Legend = () => {
  return (
    <div className={styles.legend}>
      <span>Меньше</span>
      <ul className={styles.legendSquares}>
        <DayCell count={0} />
        <DayCell count={5} />
        <DayCell count={15} />
        <DayCell count={25} />
        <DayCell count={35} />
      </ul>
      <span>Больше</span>
    </div>
  );
};
