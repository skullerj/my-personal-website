import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import type { ScatterPointItem } from "recharts/types/cartesian/Scatter";
import ReactIcon from "../assets/brand-icons/react.svg";

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
}

// Custom tooltip component moved outside BubbleChart
function CustomTooltip({ active, payload }: CustomTooltipProps) {
	if (active && payload && payload.length) {
		const item = payload[0].payload;
		return (
			<div className="bg-skin-card p-2.5 border border-skin-line rounded shadow-md">
				<h4 className="font-medium">{item.title}</h4>
				<p>{item.description}</p>
				<p>
					<strong>How Much I know:</strong>
				</p>
				<p></p>
			</div>
		);
	}
	return null;
}

const data = [{ id: 1, name: "React", know: 10, use: 10, icon: ReactIcon.src }];
const bubbleSize = 20;

function BubbleChart({ width = "100%", height = 400 }: BubbleChartProps) {
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
					dataKey="know"
					name="knowledge"
					label={{ value: "How much I know", position: "insideBottom" }}
					tick={false}
					axisLine={true}
				/>
				<YAxis
					type="number"
					dataKey="use"
					name="use"
					label={{
						value: "How often do I use it",
						position: "center",
						angle: -90,
					}}
					tick={false}
					axisLine={true}
				/>
				<Tooltip cursor={false} content={<CustomTooltip />} />
				<Scatter
					name="Items"
					data={data}
					shape={({ cx, cy, payload }: any) => (
						<image
							x={cx - bubbleSize / 2}
							y={cy - bubbleSize / 2}
							width={bubbleSize}
							height={bubbleSize}
							href={payload.icon}
							style={{ clipPath: "circle()" }}
						/>
					)}
				/>
			</ScatterChart>
		</ResponsiveContainer>
	);
}

export default BubbleChart;
