import { Loader, MonthLabels, WeekColumn } from '@components';
import { addDays, format, startOfWeek, subWeeks } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useFetchData } from '@hooks';
import styles from './GraphDays.module.scss';

export const GraphDays = ({ dataUrl }) => {
  const localeMonthFormat = 'MMM';
  const { data, error, loading } = useFetchData(dataUrl);
  const {
    weeks,
    monthLabels,
  } = () => {
    const today = new Date();
    const lastWeekStart = startOfWeek(today, { weekStartsOn: 1 }); // Понедельник
    const weeks = [];

    for (let week = 50; week >= 0; week--) {
      const weekStart = subWeeks(lastWeekStart, week);
      const days = [];

      for (let day = 0; day < 7; day++) {
        days.push(addDays(weekStart, day));
      }
      weeks.push(days);
    }

    const monthLabels = {};
    let prevMonth = null;
    weeks.forEach((week, idx) => {
      const firstDay = week[0];
      const m = firstDay.getMonth();
      if (m !== prevMonth) {
        monthLabels[idx] = format(firstDay, localeMonthFormat, { locale: ru });
        prevMonth = m;
      }
    });

    return { weeks, monthLabels };
  };

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
      <MonthLabels
        weeks={weeks}
        monthLabels={monthLabels}
        localeMonthFormat={localeMonthFormat}
      />
    </div>
  );
};
