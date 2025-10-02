import { GraphDays, Legend, WeekdayLabels } from '@components';
import { DAYS_LOCALE_RU } from '@constants';
import styles from './ContributionGraph.module.scss';

export const ContributionGraph = ({ dataUrl = '' }) => {
  if (!dataUrl) {
    return <div>Пожалуйста, укажите dataUrl как пропс.</div>;
  }

  return (
    <div className={styles.contributionGraph}>
      <WeekdayLabels days={DAYS_LOCALE_RU} />
      <GraphDays dataUrl={dataUrl} />
      <Legend />
    </div>
  );
};
