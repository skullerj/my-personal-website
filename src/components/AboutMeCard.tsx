import { CodeXml, MapPin, Smile } from "lucide-react";

function FlippingCard() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-accent">Who am I?</h3>
      <div className="flex flex-wrap gap-4  items-center">
        <div className="flex flex-col gap-4 flex-1 items-center text-center border-1 min-w-[200px] p-4">
          <CodeXml className="h-[70px] w-[70px] fill-none stroke-1" />
          <h3>Developer</h3>
          <span className="min-h-[72px]">Building websites since 2016</span>
        </div>{" "}
        <div className="flex flex-col gap-4 flex-1 items-center text-center border-1 min-w-[200px] p-4">
          <MapPin className="h-[70px] w-[70px] fill-none stroke-1" />
          <h3>London</h3>
          <span className="min-h-[72px]">
            Here since 2024, originally from EC
          </span>
        </div>
        <div className="flex flex-col gap-4 flex-1 items-center text-center border-1 min-w-[200px] p-4">
          <Smile className="h-[70px] w-[70px] fill-none stroke-1" />
          <h3>Fun Dude</h3>
          <span className="min-h-[72px]">Or at least that's what mom said</span>
        </div>
      </div>
      <p>
        I'm Juan, a Front End / Full Stack Developer specialized in{" "}
        <strong>React</strong>. I made my first website back on 2016 for a
        friend and those skills got me a job, which got me the next one and so
        on. That learn and grow path has continued ever since. Now, I get to
        this for a living and I'm grateful about it. <br /> <br />I like
        programming and design in general. I’m trying to impress you right now
        using those skills my dear reader, and of course also trying to get a
        little giggle out of you as well.
      </p>
    </div>
  );
}

export default FlippingCard;
