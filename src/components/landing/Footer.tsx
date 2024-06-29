import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import Image from "next/image";

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      {/* background grid */}
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={64}
          height={64}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading dark:text-white lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 my-5 text-center md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:andritianasteve@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
