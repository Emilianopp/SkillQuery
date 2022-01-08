import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";
import content from "content/content.json";
function BarGraph({ data, title }) {
  console.log(data, title, "IN BAR");

  return (
    <>
      <div
        style={{
          fontSize: "vw",
          height: "8%",
          color: content.colors.black,
          textAlign: "center",
        }}
      >
        {title} proportion across {data.numRoles} roles
      </div>
      <ResponsiveContainer width={"100%"} height={"92%"} style={{ padding: 0 }}>
        <BarChart
          data={data.counts}
          title={"test est"}
          margin={{
            top: 0,
            right: 20,
            left: 10,
            bottom: 35,
          }}  
        >
          <XAxis
            dataKey="name"
            tick={{ fontSize: ".6vw", textAlign: "right" }}
            angle={"60"}
            tickSize={20}
            interval={0}
            stroke={content.colors.black}
          ></XAxis>
          <YAxis
            yAxisId="left"
            width={25}
            padding={{ top: 0 }}
            tick={{ fontSize: 10 }}
            orientation="left"
            stroke={content.colors.black}
            tickFormatter={(tick) => {
              return `${tick}%`;
              }}
          />
          <Tooltip />

          <Bar
            style={{ opacity: "60%" }}
            yAxisId="left"
            dataKey="percentage"
            fill={content.colors.green}
          ></Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default BarGraph;
