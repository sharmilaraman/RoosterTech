import Header from "../components/Header";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>     
  );
}
