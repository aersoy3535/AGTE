import React from 'react';
import {
  VictoryChart,
  VictoryLegend,
  VictoryAxis,
  VictoryBar,
  VictoryLine,
  VictoryTheme,
  VictoryLabel,
} from 'victory';

const data = [
  { name: 'Dil-Bilişsel', uv: 590, pv: 800, amt: 1400 },
  { name: 'İnce Motor', uv: 868, pv: 967, amt: 1506 },
  { name: 'Kaba Motor', uv: 1397, pv: 1098, amt: 989 },
  { name: 'Sosyal Beceri - Öz Bakım', uv: 1480, pv: 1200, amt: 1228 },
];

const Chart = () => {
  return (
    <VictoryChart width={500} height={400} theme={VictoryTheme.material} animate={{ duration: 1000, onLoad: { duration: 1000, easing: 'bounce' } }}>
      <VictoryLegend x={190} y={10} orientation="horizontal" data={[{ name: 'Skor', symbol:{fill: 'rgb(33, 68, 85)'} }, { name: 'Ortalama', symbol:{fill: 'rgb(44, 205, 185)'} }]} />
      <VictoryAxis
        tickValues={data.map((item) => item.name)}
        style={{
          tickLabels: { fontSize: 8, fill: 'black', angle: -45 }, 
        }}
      />
      <VictoryAxis
        dependentAxis
        offsetX={35}
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          tickLabels: { fontSize: 8, fill: 'black' }, 
        }}
      />
      <VictoryBar data={data} x="name" y="uv" barWidth={12} style={{
        data:{ stroke: 'rgb(33, 68, 85)'}
      }} />
      <VictoryLine data={data} x="name" y="pv" style={{
        data:{ stroke: 'rgb(44, 205, 185)'}
      }}/>
    </VictoryChart>
  );
};

export default Chart;
