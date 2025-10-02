import styles from './MonthLabels.module.scss';

/**
 * Компонент MonthLabels.
 *
 * Отображает сокращения месяцев, выровненные по календарной сетке.
 *
 * @component
 * @param {Object} props
 * @param {Date[][]} props.weeks - Матрица недель для выравнивания меток.
 * @param {Record<number, string>} props.monthLabels - Соответствие индекса колонки метке месяца.
 */
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
