import { GraphDays, Legend, WeekdayLabels } from '@components';
import { DAYS_LOCALE_RU } from '@constants';
import { MonthLabels } from '@components';
import { useMemo } from 'react';
import { addDays, format, startOfWeek, subWeeks } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './ContributionGraph.module.scss';

export const ContributionGraph = ({ dataUrl = '' }) => {
  const { weeks, monthLabels } = useMemo(() => {
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
    let monthIndex = 0;

    weeks.forEach(week => {
      const firstDay = week[0];
      const m = firstDay.getMonth();
      if (m !== prevMonth) {
        monthLabels[monthIndex] = format(firstDay, 'MMM', { locale: ru });
        prevMonth = m;
        monthIndex++;
      }
    });

    return { weeks, monthLabels };
  }, []);

  if (!dataUrl) {
    return <div>Пожалуйста, укажите dataUrl как пропс.</div>;
  }

  return (
    <div className={styles.contributionGraph}>
      <MonthLabels weeks={weeks} monthLabels={monthLabels} />
      <WeekdayLabels days={DAYS_LOCALE_RU} />
      <GraphDays dataUrl={dataUrl} weeks={weeks} />
      <Legend />
    </div>
  );
};
