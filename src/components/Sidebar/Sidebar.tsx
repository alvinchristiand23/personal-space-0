import React from "react";

import Divider from "../General/Divider";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Social from "./Social";

export default function Sidebar() {
  return (
    <aside>
      <div className="scrollbar-none border-border flex w-full shrink-0 flex-col border-y-2 py-2 lg:w-18 lg:overflow-y-auto lg:border-x-2 lg:border-y-0 lg:py-4">
        <Social />
      </div>
      <div className="scrollbar-none flex grow flex-col gap-y-1 overflow-y-auto px-4 py-2 lg:gap-y-0 lg:py-4">
        <Header />
        <Divider className="my-8 hidden lg:flex" />
        <Navigation />
        <Divider className="my-8 hidden lg:flex" />
        <Footer />
      </div>
    </aside>
  );
}
