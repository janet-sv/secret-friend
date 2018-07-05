import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recharts , {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import './BarChart.css';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 8, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 18, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class CustomBarChart extends Component {

  render() {
    const {
      chartContent,
      chartContentKeys,
    } = this.props;

    return (
      <BarChart width={600} height={300} data={chartContent}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         {
          chartContentKeys.map(key => (
            <Bar key={key.name} dataKey={key.name} fill={key.color} minPointSize={5}/>
          ))
         }
      </BarChart>
    );
  }
}

export default CustomBarChart;