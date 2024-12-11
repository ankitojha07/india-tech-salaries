import React, { useState, useEffect } from "react";
import { calculateMedian } from "../utils/calculateMedian"; // import the calculateMedian function

interface MedianCalculatorProps {
  data: number[]; // Specify the type for the data prop
}

const MedianCalculator: React.FC<MedianCalculatorProps> = ({ data }) => {
  const [median, setMedian] = useState<number | null>(null);

  useEffect(() => {
    if (data && data.length) {
      const medianValue = calculateMedian(data);

      // Ensure that medianValue is a valid number and round it to the nearest integer
      if (!isNaN(medianValue)) {
        const roundedMedian = Math.round(medianValue); // Rounds to the nearest integer
        setMedian(roundedMedian);
      } else {
        setMedian(null); // or you can set a default value if needed
      }
    }
  }, [data]);

  return <>{median !== null ? median : "N/A"}</>;
};

export default MedianCalculator;
