import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../components/home";
import Bio from "../components/bio";
import Background from "../components/background";

export default function All() {
  return (
    <>
      <div>
        <Background/>
        <Header/>
        <div>
          <Home/>
          <Bio/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
