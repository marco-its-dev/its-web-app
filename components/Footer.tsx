"use client";

import { FC, useEffect, useState } from "react";

export const Footer: FC = () => {
  const [year, setyear] = useState(new Date().getFullYear());

  useEffect(() => {
    setyear(year);
  }, []);

  return (
    <footer className="bg-black p-[2vw]">
      <h3>Copyright {year} © SIMPLE SITE All rights reserved</h3>
    </footer>
  );
};
