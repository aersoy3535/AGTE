import Chart from "./Chart"

const ChartPage = () => {

    return(
        <div className="chartpage-overlay">
            <div className="chartpage-container">
                <button className="chart-button">T-Puanı</button>
                <Chart/>
            </div>
        </div>
    )
}

export default ChartPage