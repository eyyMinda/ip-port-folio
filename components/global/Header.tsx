import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../../typings";

/** react-toggle-dark-mode generates different SVG mask ids on server vs client. */
const DarkModeSwitchClient = dynamic(() => import("./DarkModeSwitchClient"), {
  ssr: false,
  loading: () => <span className="inline-block h-[30px] w-[30px] shrink-0" aria-hidden />
});

type Props = {
  socials: Social[];
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ socials, dark, setDark }: Props) {
  const toggleDarkMode = (checked: boolean) => setDark(checked);

  const [fgColor, setFgColor] = useState<string>("gray");
  useEffect(() => {
    setFgColor(_ => (dark ? "gray" : "coral"));
  }, [dark]);

  return (
    <header
      className={`sticky top-0 p-5 flex justify-items-center
  mx-auto max-w-7xl z-20 items-center ${!dark && "light"}`}>
      <motion.div
        className="flex flex-row items-center grow md:grow-0"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}>
        {socials?.map(social => (
          <SocialIcon
            key={social._id}
            url={social.url}
            className="socialIcons"
            fgColor={fgColor}
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <div className="flex justify-center mt-1 mr-4 mb-0 md:grow md:mr-0">
        <DarkModeSwitchClient
          checked={dark}
          onChange={toggleDarkMode}
          size={30}
          sunColor={"#FCE570"}
          moonColor={"#FEFCD7"}
        />
      </div>

      <Link href="#contact">
        <motion.div
          className="flex flex-row items-center cursor-pointer md:pr-3 socialIcons"
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}>
          <EnvelopeIcon className="m-2 w-7 h-auto cursor-pointer" />
          <p className="hidden text-sm font-semibold uppercase md:inline-flex"> Get In Touch</p>
        </motion.div>
      </Link>
    </header>
  );
}
