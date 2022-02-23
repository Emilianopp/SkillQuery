import React from "react";
import { PieChart,Cell, Pie, Legend, Tooltip,ResponsiveContainer,PolarAngleAxis } from "recharts";
import content from "content/content.json";

function PieGraph({ data, title }) {
  const COLORS = [ content.colors.green, "#0088FE","#FFBB28"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx,cy,x, y, midAngle, innerRadius, outerRadius, percent, index }) => {
 
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${Math.round(percent*100) }%`}
      </text>
    );
  };
  return (
    <>
      <div
        style={{
          fontSize: "1.3vw",
          height: "8%",
          color: content.colors.black,
          textAlign: "center",
        }}
      >
        Proportion of saught after {title}
      </div>

    <ResponsiveContainer     width={'100%'}
    height={'92%'}>
      <PieChart      >
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={80}
          fill="#8884d8"
          
          labelLine = {false}
          label={renderCustomizedLabel}
      
      
        >
         {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
        ))}
          </Pie>
          <Legend     margin={{ top: 0, right: 0, left: 0, bottom: 20 }}/>
       
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
</>
  );
}

export default PieGraph;
