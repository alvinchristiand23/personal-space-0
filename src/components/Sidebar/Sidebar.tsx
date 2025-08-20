import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <aside className="scrollbar-none">
      <Header />
      <Navigation />
      <Footer />
    </aside>
  );
}
