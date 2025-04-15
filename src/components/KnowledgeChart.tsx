import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ReactIcon from "../assets/brand-icons/react.svg";
import AWS from "../assets/brand-icons/amazonwebservices.svg";
import CSS from "../assets/brand-icons/css.svg";
import GraphQL from "../assets/brand-icons/graphql.svg";
import Html5 from "../assets/brand-icons/html5.svg";
import Jest from "../assets/brand-icons/jest.svg";
import MongoDB from "../assets/brand-icons/mongodb.svg";
import NestJS from "../assets/brand-icons/nestjs.svg";
import NodeJS from "../assets/brand-icons/nodejs.svg";
import PosgreSQL from "../assets/brand-icons/postgresql.svg";
import Storybook from "../assets/brand-icons/storybook.svg";
import Typescript from "../assets/brand-icons/typescript.svg";

export interface KnowledgeEntry {
  id: string;
  know: number;
  use: number;
  name: string;
  description: string;
  icon: string;
}

interface KnowledgeChartProps {
  width?: number | string;
  height?: number | string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: KnowledgeEntry }[];
}

// Custom tooltip component moved outside BubbleChart
function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    return (
      <div className="bg-card p-2.5 border border-skin-line rounded shadow-md max-w-sm">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    );
  }
  return null;
}

const data: KnowledgeEntry[] = [
  {
    id: "react",
    name: "React",
    description:
      "Been working with this for 6 years. I use it daily and put a lot of effort in improving my skills with it",
    know: 10,
    use: 10,
    icon: ReactIcon.src,
  },
  {
    id: "css",
    name: "CSS",
    description:
      "I've tasted almost every flavor: Vanilla CSS, JSS, SASS, Tailwind. The one I've used the most is JSS and I'm getting better at Tailwind",
    know: 9,
    use: 7,
    icon: CSS.src,
  },
  {
    id: "html5",
    name: "HTML5",
    description: "Markup language for the web",
    know: 8,
    use: 8.5,
    icon: Html5.src,
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Typed superset of JavaScript",
    know: 9,
    use: 10,
    icon: Typescript.src,
  },
  {
    id: "aws",
    name: "AWS",
    description: "Cloud infrastructure and services",
    know: 4,
    use: 4,
    icon: AWS.src,
  },
  {
    id: "graphql",
    name: "GraphQL",
    description: "API query language",
    know: 6,
    use: 7,
    icon: GraphQL.src,
  },
  {
    id: "jest",
    name: "Jest",
    description: "JavaScript testing framework",
    know: 7,
    use: 6,
    icon: Jest.src,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    description: "NoSQL database",
    know: 3,
    use: 2,
    icon: MongoDB.src,
  },
  {
    id: "nestjs",
    name: "NestJS",
    description: "Node.js framework for server-side applications",
    know: 5,
    use: 2,
    icon: NestJS.src,
  },
  {
    id: "nodejs",
    name: "NodeJS",
    description: "JavaScript runtime for server-side development",
    know: 6,
    use: 9,
    icon: NodeJS.src,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description: "Relational database management system",
    know: 7,
    use: 8,
    icon: PosgreSQL.src,
  },
  {
    id: "storybook",
    name: "Storybook",
    description: "UI component development and documentation tool",
    know: 8,
    use: 5,
    icon: Storybook.src,
  },
];
const bubbleSize = 40;

function KnowledgeChart({ width = "100%", height = 400 }: KnowledgeChartProps) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <ScatterChart
        margin={{
          top: 10,
          right: 10,
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
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          shape={({ cx, cy, payload }: any) => (
            <image
              x={cx - bubbleSize / 2}
              y={cy - bubbleSize / 2}
              width={bubbleSize}
              height={bubbleSize}
              className="cursor-pointer"
              href={payload.icon}
            />
          )}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default KnowledgeChart;
