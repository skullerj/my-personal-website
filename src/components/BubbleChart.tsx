import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { ScatterPointItem } from "recharts/types/cartesian/Scatter";

export interface BubbleChartItem {
  id: string | number;
  x: number;
  y: number;
  title: string;
  description: string;
  icon?: string; // URL to the image to display in the bubble
}

interface BubbleChartProps {
  data: BubbleChartItem[];
  xAxisTitle?: string;
  yAxisTitle?: string;
  bubbleSize?: number;
  width?: number | string;
  height?: number | string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  xAxisTitle: string;
  yAxisTitle: string;
}

// Custom tooltip component moved outside BubbleChart
const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  xAxisTitle,
  yAxisTitle,
}) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    return (
      <div className="bg-skin-card p-2.5 border border-skin-line rounded shadow-md">
        <h4 className="font-medium">{item.title}</h4>
        <p>{item.description}</p>
        <p>
          <strong>{xAxisTitle}:</strong> {item.x}
        </p>
        <p>
          <strong>{yAxisTitle}:</strong> {item.y}
        </p>
      </div>
    );
  }
  return null;
};

const CircleOrIcon: React.FC<ScatterPointItem & { bubbleSize: number }> = (
  props,
) => {
  const { cx, cy, payload, bubbleSize } = props;
  if (!cx || !cy || !payload) return null;

  if (payload.icon) {
    return (
      <image
        x={cx - bubbleSize / 2}
        y={cy - bubbleSize / 2}
        width={bubbleSize}
        height={bubbleSize}
        href={payload.icon}
        style={{ clipPath: "circle()" }}
      />
    );
  }

  return <circle cx={cx} cy={cy} r={bubbleSize / 2} />;
};

const BubbleChart: React.FC<BubbleChartProps> = ({
  data,
  xAxisTitle = "X Axis",
  yAxisTitle = "Y Axis",
  bubbleSize = 100,
  width = "100%",
  height = 400,
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 10,
          left: 0,
        }}
      >
        <XAxis
          type="number"
          dataKey="x"
          name={xAxisTitle}
          label={{ value: xAxisTitle, position: "insideBottom" }}
          tick={false}
          axisLine={true}
        />
        <YAxis
          type="number"
          dataKey="y"
          name={yAxisTitle}
          label={{ value: yAxisTitle, position: "center", angle: -90 }}
          tick={false}
          axisLine={true}
        />
        <Tooltip
          cursor={false}
          content={
            <CustomTooltip xAxisTitle={xAxisTitle} yAxisTitle={yAxisTitle} />
          }
        />
        <Scatter
          name="Items"
          data={data}
          shape={(props: any) => (
            <CircleOrIcon bubbleSize={bubbleSize} {...props} />
          )}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default BubbleChart;
