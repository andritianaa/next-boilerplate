import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "@/components/common/TextGenerateEffect";
import Particles from "@/components/magicui/particles";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative mt-32 flex h-fit w-full items-center justify-center overflow-hidden rounded-lg bg-background p-4">
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <div className="z-10 flex items-center justify-center">
            <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Stop loosing time on setting up NextJS</span>

                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
          <TextGenerateEffect
            words="Build your SaaS with NextAS, ship with precision."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="mb-4 text-center text-sm dark:text-white md:text-lg md:tracking-wider lg:text-2xl">
            A Next.js boilerplate with built-in stuffs and reusable components.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh
      />
    </div>
  );
};

export default Hero;
