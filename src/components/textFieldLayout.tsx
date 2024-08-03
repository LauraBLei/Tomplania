interface TextFieldLayoutProps {
  children: React.ReactNode;
}

export const TextFieldLayout = ({ children }: TextFieldLayoutProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="outerBox">
        <div className="textBox">{children}</div>
      </div>
    </div>
  );
};
