import { ContributionGraph } from '@components';
import styles from './App.module.scss';

export const App = () => {
  return (
    <main className={styles.app}>
      <ContributionGraph dataUrl={import.meta.env.VITE_API_URL || ''} />
    </main>
  );
};
