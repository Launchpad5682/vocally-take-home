import { ChangeEventHandler } from "react";

type Props = {
  id: string;
  disabled?: boolean;
  type: "email" | "text";
  required?: boolean;
  placeholder: string;
  value: string;
  changeHandler?: ChangeEventHandler<HTMLInputElement>;
};

export function InputField({
  id,
  disabled = false,
  type,
  required = true,
  placeholder,
  value,
  changeHandler = () => {},
}: Props) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      required={required}
      disabled={disabled}
      value={value}
      onChange={changeHandler}
      className="bg-transparent placeholder:text-gray-500 outline-none rounded-full border-gray-500 border-2 w-full md:w-72 py-2 px-5 focus:border-white"
    />
  );
}
