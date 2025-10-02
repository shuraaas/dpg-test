import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Tooltip.module.scss';

/**
 * Компонент Tooltip.
 *
 * Всплывающая панель для отображения деталей о вкладах.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.text='text'] - Содержимое подсказки.
 * @param {string|null} [props.time=null] - Необязательная отформатированная дата/время.
 * @param {boolean} [props.isOpen=false] - Флаг видимости.
 * @param {import('react').Ref<HTMLDivElement>} ref - Проброшенный ref к корневому элементу.
 */
export const Tooltip = forwardRef(
  ({ text = 'text', time = null, isOpen = false }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(styles.tooltip, { [styles.isVisible]: isOpen })}
      >
        <p>{text}</p>
        {time && <time className={styles.tooltipTime}>{time}</time>}
      </div>
    );
  },
);
