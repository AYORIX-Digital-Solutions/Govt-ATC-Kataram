import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Courses from "./sections/Courses";
import Admissions from "./sections/Admissions";
import Facilities from "./sections/Facilities";
import Notices from "./sections/Notices";
import Gallery from "./sections/gallery";
import PrincipalMessage from "./sections/PrincipalMessage";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Admissions />
        <Facilities />
        <Notices />
        <Gallery />
        <PrincipalMessage />
        <Contact />
        <Footer />

        <section id="about"></section>
        <section id="trades"></section>
        <section id="admissions"></section>
        <section id="facilities"></section>
        <section id="notices"></section>
        <section id="gallery"></section>
        <section id="contact"></section>
      </main>
    </>
  );
}

export default App;