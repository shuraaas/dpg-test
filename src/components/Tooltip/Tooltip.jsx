import styles from './Tooltip.module.scss';
import clsx from 'clsx';
import { forwardRef } from 'react';

export const Tooltip = forwardRef(
  ({ text = 'test', time = true, isOpen = false }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(styles.tooltip, { [styles.isVisible]: isOpen })}
      >
        <p>{text}</p>
        {time && <time>time</time>}
      </div>
    );
  },
);
