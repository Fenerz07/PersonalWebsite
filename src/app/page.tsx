import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../components/home";
import Bio from "../components/bio";
import Background from "../components/background";
import Projects from "../components/projects";
import Experience from "../components/experience";
import ContactMe from "../components/contactme";

export default function All() {
  return (
    <>
        <Background/>
        <Header/>
        <div>
          <Home/>
          <Bio/>
          <Projects/>
          <Experience/>
          <ContactMe/>
        </div>
        <Footer/>
    </>
  );
}
