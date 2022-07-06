import { ReactNode } from "react";

type Props = { reverse?: boolean; children: ReactNode };

export function SideBySide({ reverse = false, children }: Props) {
  return (
    <div
      className={`flex flex-col w-full h-full max-h-fit ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } md:justify-between md:items-center pt-5 pb-8 md:py-12 gap-10 md:gap-0`}
    >
      {children}
    </div>
  );
}
