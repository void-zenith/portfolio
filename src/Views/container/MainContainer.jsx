
import NavbarItems from "../components/Navbar-items";
import AboutMe from "./AboutMe";
// import ContactMe from "./ContactMe";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
const MainContainer = () => {
    return (<main>
        <HeroSection />
        <AboutMe />
        <Skills />
        {/* <ContactMe /> */}
        <NavbarItems/>
    </main>)
}

export default MainContainer;