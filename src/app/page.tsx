import Experience from "@/components/Experience/Experience";
import Overview from "@/components/Overview/Overview";
import Project from "@/components/Project/Project";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SITE_TITLE } from "@/constants";

import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <div className="bg-primary sticky top-0 z-80 h-8"></div>
      <h1 className="sr-only">{SITE_TITLE}</h1>
      <div className="container">
        <Sidebar />
        <main>
          <Overview />
          <Experience />
          <Project />
        </main>
      </div>
      <div className="bg-primary sticky bottom-0 z-80 h-8"></div>
    </RootLayout>
  );
}
