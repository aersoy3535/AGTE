import React, { useContext } from 'react'
import {
  VictoryChart,
  VictoryLegend,
  VictoryAxis,
  VictoryBar,
  VictoryLine,
  VictoryTheme,
  VictoryLabel,
  LineSegment,
} from 'victory'
import AppContext from '../Context'





const Chart = () => {

  const { dilScore, sosyalScore, kabaScore, inceScore } = useContext(AppContext)
  const { dilScoreTreshold, sosyalScoreTreshold, kabaScoreTreshold, inceScoreTreshold } = useContext(AppContext)


  const data = [
    { name: 'Dil-Bilişsel', uv: dilScore, pv: dilScoreTreshold },
    { name: 'İnce Motor', uv: inceScore, pv: inceScoreTreshold },
    { name: 'Kaba Motor', uv: kabaScore, pv: kabaScoreTreshold },
    { name: 'Sosyal Beceri - Öz Bakım', uv: sosyalScore, pv: sosyalScoreTreshold },
  ]

  return (


    <VictoryChart width={500} height={400} theme={VictoryTheme.material}  animate={{ duration: 1000, onLoad: { duration: 1000, easing: 'bounce' } }}>
      <VictoryLegend x={180} y={10} orientation="horizontal" gutter={5} data={[
        { name: 'Skor', symbol: { fill: 'rgb(33, 68, 85)' } },
        { name: 'Hedef', symbol: { fill: 'rgb(44, 205, 185)' } },
      ]}/>
      <VictoryLegend x={350} y={0} orientation="vertical" centerTitle title={"Hedefler"} gutter={2} data={[
         { name: `Dil Bilişsel ${dilScoreTreshold}`, symbol: {fill : "none"}},
         { name: `İnce Motor ${inceScoreTreshold}`, symbol: {fill: "none"}},
         { name: `Kaba Motor ${kabaScoreTreshold}`, symbol: {fill: "none"}},
         { name: `Sosyal Beceri ${sosyalScoreTreshold}`, symbol: {fill: "none"}}
      ]}/>
      <VictoryAxis
        tickValues={data.map((item) => item.name)}
        style={{
          tickLabels: { fontSize: 8, fill: 'black', angle: -45 },
          grid: {stroke: 'white'}
        }}
      />
      <VictoryAxis
        dependentAxis
        offsetX={35}
        gridComponent={<LineSegment type={"none"}/>}
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          tickLabels: { fontSize: 8, fill: 'black' },
          grid: {stroke: 'white'}
        }}
        domain={[0, 60]}
      />
      <VictoryBar
        data={data}
        x="name"
        y="uv"
        barWidth={12}
        style={{
          data: { stroke: 'rgb(33, 68, 85)' },
        }}
        labels={data.map((item) => item.uv)}
        labelComponent={
          <VictoryLabel
            dy={-5}
            style={{ fontSize: 12, fill: 'rgb(33, 68, 85)' }}
          />
        }
      />

      <VictoryLine data={data} x="name" y="pv" style={{
        data: { stroke: 'rgb(44, 205, 185)' },
      }}
      />
    </VictoryChart>
  )
}

export default Chart
