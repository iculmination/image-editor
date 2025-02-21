import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/button";
import { Highlight } from "./ui/highlight";

const Hero = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-tr from-slate-950 to-slate-800">
      <BackgroundBeams />
      <div className="text-white flex flex-col items-center justify-center h-full">
        <h1 className="font-bold text-6xl text-center tracking-widest leading-snug select-none">
          Edit photos <br />
          <Highlight className="px-8 pb-3">easily and quickly</Highlight>
          <br /> – no hassle!
        </h1>

        <Button variant="luxury" size='giant' className="mt-10 z-20">
          Try now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
