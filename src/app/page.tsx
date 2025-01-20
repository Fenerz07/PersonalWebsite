import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../components/home";
import Bio from "../components/bio";
import Background from "../components/background";
import Projects from "../components/projects";

export default function All() {
  return (
    <>
      <div>
        <Background/>
        <Header/>
        <div>
          <Home/>
          <Bio/>
          <Projects/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
