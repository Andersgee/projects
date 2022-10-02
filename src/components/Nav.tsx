//import Link from "next/link";
import React from "react";
import { ThemeToggleButton } from "src/components/ThemeToggleButton";

//const LINK_STYLE = "underline decoration-dotted hover:decoration-solid";

export function Nav() {
  return (
    <div className="flex justify-between items-center">
      <div className="ml-2">{/*<Link href="/">left</Link>*/}</div>
      <div className="flex space-x-3">
        {/*
        <Link href="/">
          <a className={LINK_STYLE}>link1</a>
        </Link>
        <Link href="/">
          <a className={LINK_STYLE}>link2</a>
        </Link>
  */}
      </div>
      <div className="mr-0">
        <ThemeToggleButton />
      </div>
    </div>
  );
}
