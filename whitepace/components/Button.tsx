import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onclick?: () => void;
  btnClassName: string;
  src?: string;
  alt?: string;
  imgClassName?: string;
}
const Button = ({
  children,
  onclick,
  btnClassName,
  imgClassName,
  alt,
  src,
}: ButtonProps) => {
  return (
    <button className={btnClassName} onClick={onclick}>
      <div>{children}</div>
      {src && alt && imgClassName && (
        <img src={src} alt={alt} className={imgClassName} />
      )}
    </button>
  );
};

export default Button;
