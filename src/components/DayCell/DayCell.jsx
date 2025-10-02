import { useRef, useState } from 'react';
import { format } from 'date-fns';
import { colorForCount } from '@utils';
import { Tooltip } from '@components';
import clsx from 'clsx';
import { useOutsideClick } from '@hooks';
import styles from './DayCell.module.scss';

export const DayCell = ({ day = new Date(), count = 0 }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  const formattedDate = format(new Date(day));
  const color = colorForCount(count);
  const title = `${formattedDate} — ${count} contributions`;

  const handleToggleTooltip = () => {
    setShowTooltip(prev => !prev);
  };

  // Закрываем tooltip при клике вне его
  useOutsideClick(tooltipRef, () => setShowTooltip(false));

  return (
    <li
      className={clsx(styles.dayCell, { [styles.isSelected]: showTooltip })}
      title={title}
      style={{ '--dayCellBackgroundColor': color }}
      onClick={handleToggleTooltip}
    >
      <Tooltip ref={tooltipRef} text="qwd" isOpen={showTooltip} />
    </li>
  );
};
