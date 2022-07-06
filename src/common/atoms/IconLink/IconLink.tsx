import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function IconLink({ children }: Props) {
  return <span className="flex text-white items-center gap-2">{children}</span>;
}
