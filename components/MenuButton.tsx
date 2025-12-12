"use client";

import Image from "next/image";
import { ReactElement } from "react";
import { menuIsOpened } from "./Menu";
import { observer } from "@legendapp/state/react";

export const MenuButton = observer((): ReactElement => {
  return (
    <section>
      <Image
        onClick={() => {
          console.log("Menu is opening!");
          menuIsOpened.set(true);
          console.log(`menuIsOpened: ${menuIsOpened.peek()}`);
        }}
        src={"/menu.svg"}
        width={32}
        height={32}
        alt="Menu"
      />
    </section>
  );
});
