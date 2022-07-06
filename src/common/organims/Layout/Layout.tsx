import React, { ReactNode } from "react";

type Props = { children: ReactNode };

export function Layout({ children }: Props) {
  return (
    <div className="flex min-h-full w-full bg-gradient-to-b from-gray-900 to-gray-800 bg">
      <div className="flex flex-col h-full max-w-screen-2xl mx-auto">
        {children}
      </div>
    </div>
  );
}
