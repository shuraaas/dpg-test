import { ContributionGraph } from '@components';
import styles from './App.module.scss';

/**
 * Корневой компонент приложения.
 *
 * Отображает график вкладов, используя URL API из переменных окружения.
 * @component
 */
export const App = () => {
  return (
    <main className={styles.app}>
      <ContributionGraph dataUrl={import.meta.env.VITE_API_URL || ''} />
    </main>
  );
};
