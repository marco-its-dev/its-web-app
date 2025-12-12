import { FC } from "react";
import Image from "next/image";
import { MenuButton } from "./MenuButton";
import { MainRoutesLinks } from "./MainRoutesLink";

export const Header: FC = () => {
  return (
    <header className="bg-amber-600 flex row p-[1vw] items-center">
      <section className="flex flex-1 row items-center gap-[1vw]">
        <Image width={200} height={200} src={"/logo.png"} alt="logo" />

        <MainRoutesLinks className="hover:text-gray-600" />
      </section>

      <MenuButton />
    </header>
  );
};
