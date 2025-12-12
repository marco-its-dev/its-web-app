import Link from "next/link";
import { FC } from "react";

type MainRoutesLinksProps = {
  className: string;
  onclick?: VoidFunction;
};

export const MainRoutesLinks: FC<MainRoutesLinksProps> = ({
  className,
  onclick,
}) => {
  return (
    <>
      <Link onClick={onclick} href={"/"} className={className}>
        Home
      </Link>

      <Link onClick={onclick} href={"/about"} className={className}>
        About
      </Link>

      <Link onClick={onclick} href={"/contact"} className={className}>
        Contact
      </Link>
    </>
  );
};
