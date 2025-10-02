export const MonthLabels = ({ weeks, monthLabels, squareSize }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: -(14 + 8),
        left: 0,
        display: 'flex',
        gap: '2px',
      }}
    >
      {weeks.map((week, idx) => (
        <div key={idx} style={{ width: 14 }}>
          {monthLabels[idx] && (
            <span className="text-xs text-gray-700">{monthLabels[idx]}</span>
          )}
        </div>
      ))}
    </div>
  );
};
