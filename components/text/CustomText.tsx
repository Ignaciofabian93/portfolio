export type TextProps = {
  text: string;
};

export const CustomTitle = ({ text }: TextProps) => {
  return (
    <h1 className="text-4xl text-center text-primary-500 mb-[0.5rem] font-serif italic">
      {text}
    </h1>
  );
};

export const CustomSubtitle = ({ text }: TextProps) => {
  return (
    <h4 className="text-lg text-center text-primary-500 mb-[1rem] font-serif italic">
      {text}
    </h4>
  );
};
