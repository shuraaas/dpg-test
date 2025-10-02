import styles from './Loader.module.scss';

export const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};
