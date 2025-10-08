import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../typings";
import BackgroundCircles from "./ui/BackgroundCircles";

type Props = {
  dark: boolean;
  pageInfo: PageInfo;
  isExperiences: number;
};

export default function Hero({ dark, pageInfo, isExperiences }: Props) {
  const [text, count] = useTypewriter({
    words: [`${pageInfo?.name}`, "Logical-Competitive.jsx", "<YetPlayful&Creative />"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
    deleteSpeed: 50
  });

  return (
    <div
      className="flex overflow-hidden flex-col justify-center items-center space-y-8 h-screen text-center">
      <BackgroundCircles dark={dark} />

      <div className="z-20">
        <h2 className={`text-gray-${dark ? "500" : "800"} text-sm uppercase tracking-[10px]`}>{pageInfo?.role}</h2>

        <h1
          className="text-2xl xs:text-[1.8rem] lg:text-5xl font-semibold py-5
         max-w-[300px] xs:max-w-none mx-auto">
          <span>{text}</span>
          <Cursor cursorColor={dark ? "darkred" : "coral"} />
        </h1>

        <div className={`${!dark && "light"} pt-5 flex flex-wrap justify-center gap-2`}>
          <Link href="#about" className="heroButton">
            About
          </Link>
          {isExperiences ? (
            <Link href="#experience" className="heroButton">
              Experience
            </Link>
          ) : (
            ""
          )}
          <Link href="#skills" className="heroButton">
            Skills
          </Link>
          <Link href="#projects" className="heroButton">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
