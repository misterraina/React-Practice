import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;

const data = [
  { name: 'Underweight', value: 18.5, color: '#ff9999' },
  { name: 'Normal weight', value: 24.9 - 18.5, color: '#99ff99' },
  { name: 'Overweight', value: 29.9 - 24.9, color: '#ffcc99' },
  { name: 'Obesity Class 1', value: 34.9 - 29.9, color: '#ff9933' },
  { name: 'Obesity Class 2', value: 39.9 - 34.9, color: '#ff6666' },
];

const cx = 250; // Center x-coordinate
const cy = 200; // Center y-coordinate, adjust as needed
const iR = 80; // Inner radius
const oR = 150; // Outer radius

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx;
  const y0 = cy;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="needle-base" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      key="needle"
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="none"
      fill={color}
    />,
  ];
};

export default class BMIGauge extends PureComponent {
  render() {
    const { value = 24 } = this.props;

    const labelPositions = data.map((entry, index) => {
      const total = data.reduce((sum, item) => sum + item.value, 0);
      const angle = 180 - (180 * (data.slice(0, index).reduce((sum, item) => sum + item.value, 0) + entry.value / 2) / total);
      const radians = RADIAN * angle;
      const x = cx + (oR + iR) / 2 * Math.cos(radians);
      const y = cy - (oR + iR) / 2 * Math.sin(radians);
      return { x, y, text: entry.name };
    });

    return (
      <div className='flex items-center justify-center h-full font-nunito font-bold'>
        <PieChart width={500} height={240} className="h-auto"> {/* Reduced height */}
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, data, cx, cy, iR, oR, '#d0d000')}
          {labelPositions.map((pos, index) => (
            <text
              key={`label-${index}`}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#000"
              fontSize={14}
            >
              {pos.text}
            </text>
          ))}
        </PieChart>
      </div>
    );
  }
}
