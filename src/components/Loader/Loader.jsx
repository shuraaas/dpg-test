import styles from './Loader.module.scss';

/**
 * Компонент Loader.
 *
 * Отображает спиннер, пока `isLoading` равен `true`.
 *
 * @component
 * @param {Object} props
 * @param {boolean} props.isLoading - Показывать ли индикатор загрузки.
 */
export const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};
