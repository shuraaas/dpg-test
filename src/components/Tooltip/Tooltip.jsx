import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Tooltip.module.scss';

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
