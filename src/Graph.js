import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ChartsReferenceLine } from '@mui/x-charts/ChartsReferenceLine';
import { LinePlot, MarkPlot,  LineChart,
  lineElementClasses,
  markElementClasses } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function LineChartWithReferenceLines() {
  return (
    <ChartContainer
    yAxis={[
      {
        colorMap: {
          type: "piecewise",
          thresholds: [0, 10],
          colors: ["red", "green", "red"]
        }
      }
    ]}
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv', type: 'line',id: "pvId" },
        { data: uData, label: 'uv', type: 'line' },
      ]}
      sx={{
        [`.${lineElementClasses.root}`]: {
          strokeWidth: 1
        },
        ".MuiLineElement-series-pvId": {
          strokeDasharray: "5 5"
        },
        ".MuiLineElement-series-uvId": {
          stroke: "9"
        },
        [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
          fill: "#fff"
        },
        
        // Disable hover effects
        
      }}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    >
      <LinePlot />
      <MarkPlot />
    
      <ChartsReferenceLine y={9800}  lineStyle={{ stroke: 'none' }} />
      <ChartsXAxis />
      <ChartsYAxis />
    </ChartContainer>
  );
}




