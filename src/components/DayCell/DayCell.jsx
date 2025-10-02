import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { colorForCount } from '@utils';
import { Tooltip } from '@components';
import { useOutsideClick } from '@hooks';
import clsx from 'clsx';
import styles from './DayCell.module.scss';

/**
 * Компонент DayCell.
 *
 * Отображает квадрат дня с насыщенностью цвета в зависимости от количества вкладов
 * и показывает всплывающую подсказку с деталями по клику.
 *
 * @component
 * @param {Object} props
 * @param {Date} [props.day] - Дата, которую представляет ячейка.
 * @param {{ count?: number, text?: string }} props.contributions - Данные о вкладах.
 */
export const DayCell = memo(({ day, contributions }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const { count, text } = contributions;

  const formattedDate = useMemo(
    () => day && format(day, 'EEEE, MMMM d, yyyy', { locale: ru }),
    [day],
  );
  const color = useMemo(() => colorForCount(count), [count]);

  const handleToggleTooltip = useCallback(() => {
    setShowTooltip(prev => !prev);
  }, []);

  useOutsideClick(tooltipRef, () => setShowTooltip(false));

  return (
    <li
      className={clsx(styles.dayCell, { [styles.isSelected]: showTooltip })}
      style={{ '--dayCellBackgroundColor': color }}
      onClick={handleToggleTooltip}
      tabIndex={0}
      aria-label={formattedDate}
    >
      <Tooltip
        ref={tooltipRef}
        text={`${text ? text : count ? count : 'No'} contributions`}
        time={formattedDate}
        isOpen={showTooltip}
      />
    </li>
  );
});
