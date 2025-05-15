import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CodeXml, MapPin, Smile } from "lucide-react";

function FlippingCard() {
  const [showMore, setShowMore] = useState(false);

  const handleFlip = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-accent">Who am I?</h3>
      <AnimatePresence mode="wait">
        <motion.div
          key={showMore ? "back" : "front"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col h-[260px] py-2"
        >
          {showMore ? (
            <div className="text-left">
              <h4 className="text-bold">
                So sweet! you want to know more about me?
              </h4>
              <br />
              <p>
                I'm Juan, a Front End / Full Stack Developer specialized in{" "}
                <strong>React</strong>. I made my first website back on 2016 for
                a friend and those skills got me a job, which got me the next
                one and so on. That learn and grow path has continued ever
                since. Now, I get to this for a living and I'm grateful about
                it. <br /> <br />I like programming and design in general. I’m
                trying to impress you right now using those skills my dear
                reader, and of course also trying to get a little giggle out of
                you as well.
              </p>
            </div>
          ) : (
            <div className="flex gap-4 justify-between">
              <div className="flex flex-col gap-4 w-[220px] items-center text-center border-1  p-4">
                <CodeXml className="h-[70px] w-[70px] fill-none stroke-1" />
                <h3>Developer</h3>
                <span>Building websites since 2016</span>
              </div>{" "}
              <div className="flex flex-col gap-4 w-[220px] items-center text-center border-1  p-4">
                <MapPin className="h-[70px] w-[70px] fill-none stroke-1" />
                <h3>London</h3>
                <span>Here since 2024, originally from EC</span>
              </div>
              <div className="flex flex-col gap-4 w-[220px] items-center text-center border-1  p-4">
                <Smile className="h-[70px] w-[70px] fill-none stroke-1" />
                <h3>Fun Dude</h3>
                <span>Or at least that's what mom said</span>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={handleFlip}
        type="button"
        className="text-accent hover:underline text-sm cursor-pointer self-end"
      >
        Tell me {showMore ? "Less" : "More"}
      </button>
    </div>
  );
}

export default FlippingCard;
