import { MouseEventHandler } from "react";

type Props = {
  displayText: string;
  hover?: boolean;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({
  displayText,
  hover = true,
  clickHandler = () => {},
}: Props) {
  return (
    <button
      className={`bg-transparent placeholder:text-gray-500 outline-none rounded-full border-gray-500 border-2 w-full md:w-72 py-2 px-5 focus:border-white ${
        hover && "hover:bg-violet-600 hover:border-violet-600"
      }`}
      onClick={clickHandler}
    >
      {displayText}
    </button>
  );
}
