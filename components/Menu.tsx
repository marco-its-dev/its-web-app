"use client";

import { Observable, observable } from "@legendapp/state";
import { observer } from "@legendapp/state/react";
import Image from "next/image";
import { FC, ReactNode } from "react";
import { MainRoutesLinks } from "./MainRoutesLink";

export const menuIsOpened: Observable<boolean | "first-render"> =
  observable("first-render");

export const Menu: FC = observer((): ReactNode => {
  return (
    <div
      className={`absolute z-10 bg-black w-full h-screen overflow-hidden mx-auto box-border p-[2vw] 
        ${
          menuIsOpened.get() === "first-render"
            ? "hidden"
            : menuIsOpened.get()
              ? "animate-slide-right"
              : "animate-slide-left"
        }
      `}
    >
      <div className="w-full flex justify-end">
        <Image
          onClick={() => menuIsOpened.set(false)}
          width={200}
          height={200}
          src={"/close.svg"}
          alt={"Close Window icon"}
          className="w-[6vw]"
        />
      </div>

      <div className="flex flex-col">
        <MainRoutesLinks
          onclick={() => menuIsOpened.set(false)}
          className="text-[6vw] hover:text-amber-200"
        />
      </div>
    </div>
  );
});
