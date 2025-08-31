import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const DownChart = ({ data }) => {
  let peak = 0;
  const ddData = data.map((d) => {
    peak = Math.max(peak, d.NAV);
    const drawdown = ((d.NAV - peak) / peak) * 100; 
    return { Date: d.Date, Drawdown: drawdown };
  });

  return (
    <div style={{ width: "100%", height: 400, marginTop: "40px" }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={ddData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Drawdown" stroke="#dc2626" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DownChart;
