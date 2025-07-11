import {
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import AWS from "../assets/brand-icons/amazonwebservices.svg";
import CSS from "../assets/brand-icons/css.svg";
import GraphQL from "../assets/brand-icons/graphql.svg";
import Html5 from "../assets/brand-icons/html5.svg";
import Jest from "../assets/brand-icons/jest.svg";
import MongoDB from "../assets/brand-icons/mongodb.svg";
import NestJS from "../assets/brand-icons/nestjs.svg";
import NodeJS from "../assets/brand-icons/nodejs.svg";
import PosgreSQL from "../assets/brand-icons/postgresql.svg";
import ReactIcon from "../assets/brand-icons/react.svg";
import Storybook from "../assets/brand-icons/storybook.svg";
import Typescript from "../assets/brand-icons/typescript.svg";

export interface KnowledgeEntry {
  id: string;
  know: number;
  use: number;
  name: string;
  description: string | React.ReactNode;
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
      <div className="bg-card p-2.5 border border-skin-line rounded shadow-md w-[80vw] max-w-sm">
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
    description: (
      <>
        React is my main tool. In <strong>2018</strong> I dedicated a full week
        learning it for a hackaton. Got 3rd place and landed a job after that.
      </>
    ),
    know: 10,
    use: 10,
    icon: ReactIcon.src,
  },
  {
    id: "css",
    name: "CSS",
    description: (
      <>I can center a div, I swear. Vanilla CSS, SCSS, JSS, or Tailwind</>
    ),
    know: 9,
    use: 7,
    icon: CSS.src,
  },
  {
    id: "html5",
    name: "HTML5",
    description:
      'I\'m on a quest to end numeric inputs with type other than "number"',
    know: 8,
    use: 8.5,
    icon: Html5.src,
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "I have a love hate relationship with this one. I've spen't too much time figuring out the right type for my methods. Once I get to the answer though (*chef kiss 👌)",
    know: 9,
    use: 10,
    icon: Typescript.src,
  },
  {
    id: "aws",
    name: "AWS",
    description:
      "From the cloud providers, this is the one I've used the most, hence, it's position in the chart. ",
    know: 4,
    use: 4,
    icon: AWS.src,
  },
  {
    id: "graphql",
    name: "GraphQL",
    description:
      "My current job demands heavy knowledge of this. I know which are it's strenghts and weaknesess.",
    know: 6,
    use: 7,
    icon: GraphQL.src,
  },
  {
    id: "jest",
    name: "Jest",
    description: "Learned when TDD and BDD were buzzwords. Used ever since",
    know: 7,
    use: 6,
    icon: Jest.src,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    description:
      "This was my favourite DB back on 2017. I grew up my knowledge to understand that is not the right tool for every job. That was painful",
    know: 3,
    use: 2,
    icon: MongoDB.src,
  },
  {
    id: "nestjs",
    name: "NestJS",
    description:
      "Dependency injection. Pretty cool concept I didn't appreciate enough when I started using this.",
    know: 5,
    use: 2,
    icon: NestJS.src,
  },
  {
    id: "nodejs",
    name: "NodeJS",
    description:
      "This is what kickstared everything. I wanted to create a web server for a friend and resources for NodeJS were relatively plentiful at the time. If anything, I am grateful for that.",
    know: 6,
    use: 9,
    icon: NodeJS.src,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description:
      "I appreciate the how versatile this DB is. I've been using it since 2021, never regretted picking it.",
    know: 7,
    use: 8,
    icon: PosgreSQL.src,
  },
  {
    id: "storybook",
    name: "Storybook",
    description:
      "I love how this tool allows you to collaborate with the design team. Show > tell, it always work.",
    know: 8,
    use: 5,
    icon: Storybook.src,
  },
];

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
          label={{
            value: "How much I know",
            position: "insideBottom",
            className: "fill-base",
          }}
          className="stroke-base"
          tick={false}
          axisLine={true}
          stroke="var(--color-base)"
        />
        <YAxis
          type="number"
          dataKey="use"
          name="use"
          label={{
            value: "How often do I use it",
            position: "center",
            angle: -90,
            className: "fill-base",
          }}
          stroke="var(--color-base)"
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
              x={cx}
              y={cy}
              className="cursor-pointer h-10 hover:h-12 -translate-5 hover:-translate-6"
              href={payload.icon}
            />
          )}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default KnowledgeChart;
