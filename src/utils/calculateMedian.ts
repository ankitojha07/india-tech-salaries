// utils.ts or helpers.ts
export const calculateMedian = (data: number[]): number => {
  const sortedData = [...data].sort((a, b) => a - b);
  const mid = Math.floor(sortedData.length / 2);

  if (sortedData.length % 2 === 0) {
    return (sortedData[mid - 1] + sortedData[mid]) / 2;
  }
  return sortedData[mid];
};
