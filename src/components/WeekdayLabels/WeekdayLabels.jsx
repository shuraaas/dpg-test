import styles from './WeekdayLabels.module.scss';
import clsx from 'clsx';

/**
 * Компонент WeekdayLabels.
 *
 * Отображает локализованные названия дней недели; при необходимости скрывает некоторые подписи.
 *
 * @component
 * @param {Object} props
 * @param {{ name: string, isHidden?: boolean }[]} props.days - Локализованные дни недели.
 */
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
