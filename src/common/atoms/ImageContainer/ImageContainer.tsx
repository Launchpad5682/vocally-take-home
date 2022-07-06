type Props = {
  src: string;
  alt: string;
};

export function ImageContainer({ src, alt }: Props) {
  return (
    <div className="flex w-full h-full flex-grow px-5 justify-center items-center">
      <img src={src} alt={alt} className="w-full max-w-2xl max-h-96" />
    </div>
  );
}
