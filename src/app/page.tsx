// import Hero from "@/sections/Hero";

import About from "@/sections/about";
import Hero from "@/sections/hero";
import Skill from "@/sections/skill"
import WorkProcess from "@/sections/workProcess";


export default function Home() {
  return (
    <div className="font-grotesque">
      <Hero/>
      <Skill/>
      <About/>
      <WorkProcess/>
    </div>
  );
}
