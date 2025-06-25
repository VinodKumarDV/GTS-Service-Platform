import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS=['#0088FE','#00C49F','#FFBB28','#FF8042','#AF19FF'];

export default function ClientChart({ data }) {
  return (
    <ResponsiveContainer width={'100%'} height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
          {data.map((_,i)=><Cell key={i} fill={COLORS[i%COLORS.length]} />)}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
