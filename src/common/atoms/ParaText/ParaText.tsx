
type Props = {
    children: string
}

export function ParaText({children}: Props) {
  return (
    <p className="font-open-sans font-extralight text-sm text-center md:text-left text-gray-400 leading-relaxed">
     {children}
    </p>
  );
}