import { Loader, WeekColumn } from '@components';
import { useFetchData } from '@hooks';
import styles from './GraphDays.module.scss';

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
