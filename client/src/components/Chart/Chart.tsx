import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import './Chart.css';

const data = [
  { name: 'Sat', amount: 1400 },
  { name: 'Sun', amount: 900 },
  { name: 'Mon', amount: 1800 },
  { name: 'Tues', amount: 2450 },
  { name: 'Wed', amount: 1600 },
  { name: 'Thu', amount: 1900 },
  { name: 'Sat', amount: 1400 },
  { name: 'Sun', amount: 900 },
  { name: 'Mon', amount: 1800 },
  { name: 'Tues', amount: 2450 },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return <div className="tooltip">${payload[0].value.toLocaleString()}</div>;
  }
  return null;
};

export default function MoneyFlowChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h2>Money Flow</h2>
        <div className="chart-controls">
          <span className="legend-dot"></span>
          Expenses
          <button className="dropdown">Last 15 Days</button>
        </div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer>
          <BarChart data={data} barSize={25}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0} />
            <XAxis
              dataKey="name"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar dataKey="amount" radius={[6, 6, 0, 0]} className="bar" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
