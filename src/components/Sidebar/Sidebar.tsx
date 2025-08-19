import React from "react";

import Divider from "../General/Divider";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <aside>
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
