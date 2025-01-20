import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../components/home";
import Bio from "../components/bio";

export default function All() {
  return (
    <>
      <div>
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/videos/lights.mp4" type="video/mp4" />
        </video>
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
