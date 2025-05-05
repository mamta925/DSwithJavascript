// build a box/chart
// y axis and x axis
// each data item maps to a bar

const Bar = ({ name, colour , ticketCount }) => {
    return (
        <div className="bar" style={{
            height: `${ticketCount}%`,
            backgroundColor: colour,
        }} >
            <div className="tooltip">{name}</div>
        </div>
    );
}
const BarChart = ({ data }) => {
    return(
    <div className="chart-container">
    <div className="chart">{
              data.map((item)=>{
                return <Bar key={item.id} {...item} />
              })

}</div>
    <div className="y-axis-label">Number of tickets</div> 
    <div className="x-axis-label">Departments</div>
    </div>
    )
    } ;
    export default BarChart;