type Props = {
  children: string;
};

export function Heading({ children }: Props) {
  return (
    <h1 className="font-open-sans font-semibold text-3xl text-center md:text-left md:text-4xl md:font-extrabold line leading-released md:leading-snug md:mt-10">
      {children}
    </h1>
  );
}
