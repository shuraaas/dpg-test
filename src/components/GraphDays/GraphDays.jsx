import { Loader, WeekColumn } from '@components';
import { useFetchData } from '@hooks';
import styles from './GraphDays.module.scss';

/**
 * Компонент GraphDays.
 *
 * Загружает данные о вкладах и отображает недельные колонки календарной сетки.
 *
 * @component
 * @param {Object} props
 * @param {string} props.dataUrl - Адрес эндпоинта для загрузки данных о вкладах.
 * @param {Date[][]} props.weeks - Матрица недель; каждая неделя — массив объектов Date.
 */
export const GraphDays = ({ dataUrl, weeks }) => {
  const { data, error, loading } = useFetchData(dataUrl);

  return (
    <div className={styles.graphDays}>
      <Loader isLoading={loading} />
      <ul className={styles.graphDaysList}>
        {weeks.map((week, index) => (
          <li key={index}>
            <WeekColumn week={week} data={data} />
          </li>
        ))}
      </ul>
    </div>
  );
};
