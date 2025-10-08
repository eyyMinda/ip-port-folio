import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  dark: boolean;
  className?: string;
};

export default function SectionDescription({ children, dark, className = "" }: Props) {
  return (
    <div
      className={`absolute top-32 left-1/2 transform -translate-x-1/2 w-[95vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] ${className}`}>
      <p
        className={`text-xs tracking-wide leading-relaxed sm:text-sm md:text-base text-center ${
          dark ? "text-gray-400" : "text-gray-600"
        }`}>
        {children}
      </p>
    </div>
  );
}
