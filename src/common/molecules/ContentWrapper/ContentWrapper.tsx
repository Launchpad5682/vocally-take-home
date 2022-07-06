import { ReactNode } from "react";

type Props = { children: ReactNode };

export function ContentWrapper({ children }: Props) {
  return (
    <div className="flex flex-col gap-5 h-full w-full px-8 md:px-12 text-white max-w-lg md:justify-center">
      {children}
    </div>
  );
}
