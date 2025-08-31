import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  YAxis,
  XAxis,
  Brush
} from "recharts";

const CombinedChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  const firstNAV = data[0].NAV;

  const processedData = data.map((d, i) => {
    const maxTillNow = Math.max(...data.slice(0, i + 1).map(row => row.NAV));
    const drawdown = ((d.NAV - maxTillNow) / maxTillNow) * 100;

    return {
      Date: d.Date,
      NAV: ((d.NAV - firstNAV) / firstNAV) * 100,
      Drawdown: drawdown < 0 ? drawdown : 0,
    };
  });

  const positiveTicks = Array.from({ length: 6 }, (_, i) => i * 100);
  const negativeTicks = Array.from({ length: 10 }, (_, i) => -i * 10);
  const customTicks = [...new Set([...positiveTicks, ...negativeTicks])].sort(
    (a, b) => a - b
  );

  return (
    <div style={{ width: "100%", height: 450 }}>
      <ResponsiveContainer>
        <LineChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="Date" hide /> 
          <YAxis ticks={customTicks} />

          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="NAV" stroke="#4CAF50" dot={false} name="Equity (%)" />
          <Line type="monotone" dataKey="Drawdown" stroke="#FF5733" dot={false} name="Drawdown (%)" />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CombinedChart;
