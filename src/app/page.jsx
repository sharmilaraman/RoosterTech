import Header from "../components/Header";
import About from "./about/page";
import Projects from "./projects/page";


export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
    </div>     
  );
}
