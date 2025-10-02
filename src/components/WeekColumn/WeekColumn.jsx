import { DayCell } from '@components';
import { format } from 'date-fns';
import styles from './WeekColumn.module.scss';

/**
 * Компонент WeekColumn.
 *
 * Отображает вертикальный список компонентов `DayCell` для заданной недели.
 *
 * @component
 * @param {Object} props
 * @param {Date[]} props.week - Массив объектов Date для одной недели.
 * @param {Record<string, number>} props.data - Карта: ISO-дата → количество вкладов.
 */
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
