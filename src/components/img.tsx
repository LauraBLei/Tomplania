type ImageProps = {
  key2: number;
  src: string;
  alt: string;
};

export const ImageButton = ({ key2: key, src, alt }: ImageProps) => {
  return (
    <button className="h-[80px] w-[80px] bg-[#d9bf9e]">
      <img key={key} src={src} alt={alt} />;
    </button>
  );
};
