export const colorForCount = count => {
  switch (true) {
    case count === undefined || count === null || count === 0:
      return '#ededed';
    case count >= 1 && count <= 9:
      return '#acd5f2';
    case count >= 10 && count <= 19:
      return '#7fa8c9';
    case count >= 20 && count <= 29:
      return '#527ba0';
    case count >= 30:
      return '#254e77';
    default:
      return '#ededed';
  }
};
