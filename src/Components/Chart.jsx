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

  const { dilScore, sosyalScore, kabaScore, inceScore, gelisimScore } = useContext(AppContext)
  const { dilScoreTreshold, sosyalScoreTreshold, kabaScoreTreshold, inceScoreTreshold, genelGelisimTreshold } = useContext(AppContext)
  const { dil20Treshold,sosyal20Treshold,kaba20Treshold,ince20Treshold,
          genel20Treshold, dil30Treshold, sosyal30Treshold, kaba30Treshold, ince30Treshold, genel30Treshold} = useContext(AppContext)


  const data = [
    { name: "Genel Gelisim", uv: gelisimScore, pv: genelGelisimTreshold },
    { name: 'Dil-Bilişsel', uv: dilScore, pv: dilScoreTreshold },
    { name: 'İnce Motor', uv: inceScore, pv: inceScoreTreshold },
    { name: 'Kaba Motor', uv: kabaScore, pv: kabaScoreTreshold },
    { name: 'Sosyal Beceri - Öz Bakım', uv: sosyalScore, pv: sosyalScoreTreshold }
  ]

  const twentyTresholds = [
    { name: "Genel Gelisim", pv: genel20Treshold  },
    { name: 'Dil-Bilişsel', pv:  dil20Treshold},
    { name: 'İnce Motor', pv:  ince20Treshold},
    { name: 'Kaba Motor', pv:  kaba20Treshold},
    { name: 'Sosyal Beceri - Öz Bakım', pv:  sosyal20Treshold}
  ]

  const thirtyTresholds = [
    { name: "Genel Gelisim", pv: genel30Treshold  },
    { name: 'Dil-Bilişsel', pv:  dil30Treshold},
    { name: 'İnce Motor', pv:  ince30Treshold},
    { name: 'Kaba Motor', pv:  kaba30Treshold},
    { name: 'Sosyal Beceri - Öz Bakım', pv:  sosyal30Treshold}
  ]

  return (


    <VictoryChart width={500} height={400} theme={VictoryTheme.material} animate={{ duration: 1000, onLoad: { duration: 1000, easing: 'bounce' } }}>
      <VictoryLegend x={180} y={10} orientation="horizontal" gutter={10} data={[
        { name: 'Skor', symbol: { fill: 'rgb(33, 68, 85)' } },
        { name: 'Hedef', symbol: { fill: 'rgb(44, 205, 185)' } },
      ]} />
      <VictoryLegend
        x={350}
        y={10}
        orientation="vertical"
        title={"Hedefler"}
        data={[
          { name: `Genel Gelişim ${genelGelisimTreshold}`, symbol: { fill: "none" }, labels: {fontSize: 10} },
          { name: `Dil Bilişsel ${dilScoreTreshold}`, symbol: { fill: "none" }, labels: {fontSize: 10} },
          { name: `İnce Motor ${inceScoreTreshold}`, symbol: { fill: "none" }, labels: {fontSize: 10} },
          { name: `Kaba Motor ${kabaScoreTreshold}`, symbol: { fill: "none" }, labels: {fontSize: 10} },
          { name: `Sosyal Beceri ${sosyalScoreTreshold}`, symbol: { fill: "none" }, labels: {fontSize: 10} },
        ]}
        labelComponent={<VictoryLabel dx={-17}/>}
        style={{
          title:{fill : 'rgb(44, 205, 185)', fontSize: 14}
        }}
      />

      <VictoryAxis
        tickValues={data.map((item) => item.name)}
        style={{
          tickLabels: { fontSize: 8, fill: 'black', angle: -33 },
          grid: { stroke: 'none' }
        }}
        tickLabelComponent={<VictoryLabel dy={3}/>}
      />
      <VictoryAxis
        dependentAxis
        offsetX={35}
        gridComponent={<LineSegment type={"none"} />}
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          tickLabels: { fontSize: 8, fill: 'black' },
          grid: { stroke: 'none' }
        }}
        domain={[0, 145]}
      />
      <VictoryBar
        data={data}
        x="name"
        y="uv"
        barWidth={20}
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

      <VictoryLine data={twentyTresholds} x="name" y="pv" style={{
        data: {stroke: 'orange'}
      }} />

      <VictoryLine data={thirtyTresholds} x="name" y="pv" style={{
        data: {stroke: 'red'}
      }} />
    </VictoryChart>
  )
}

export default Chart
