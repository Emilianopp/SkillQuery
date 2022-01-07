import React from "react";
import { PieChart,Cell, Pie, Legend, Tooltip,ResponsiveContainer,PolarAngleAxis } from "recharts";
import content from "content/content.json";

function PieGraph({ data, title }) {
  console.log(data)
  const COLORS = [ content.colors.green, "#0088FE","#FFBB28"];

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
        {title} proportion across
      </div>

    <ResponsiveContainer     width={'100%'}
    height={'92%'}>
      <PieChart >
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={80}
          fill="#8884d8"
          label = {true}
          labelLine = {false}
      
        >
         {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
