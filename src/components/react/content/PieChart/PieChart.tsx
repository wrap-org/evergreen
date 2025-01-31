import React from 'react';
import { PieChart as ReactPieChart } from 'react-minimal-pie-chart';
import type { PieChartProps } from 'react-minimal-pie-chart';

import styles from './PieChart.module.scss';

const PieChart = ({ ...props }: PieChartProps) => {
  return (
    <div className={styles['pie-chart']}>
      <ReactPieChart {...props} />
    </div>
  );
};

export default PieChart;
