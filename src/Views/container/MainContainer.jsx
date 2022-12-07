
import NavbarItems from "../components/Navbar-items";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Skills from "./Skills";

const MainContainer = () => {
    return (<main>
        <HeroSection />
        <AboutMe />
        <ContactMe />
        <Projects />
        <Skills />
        <NavbarItems/>
    </main>)
}

export default MainContainer;