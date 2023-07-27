import Navbar from "./components/navbar";
import SideInformations from "./components/sideInformations";
import NavbarProvider from "./context/navbarContext";
import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import Footer from "./sections/footer";
import Header from "./sections/header";
import SectionLayout from "./sections/layout";
import ProjectsSection from "./sections/projects";

export default function Home() {
  return (
    <NavbarProvider>
      <main id="home" className="bg-bgColor relative ">
        <Navbar />
        <SideInformations />
        <Header />

        <SectionLayout number={1} title={` A propos de moi`} id="about">
          <AboutSection />
        </SectionLayout>

        <SectionLayout number={2} title=" Mes Projets" id="projets">
          <ProjectsSection />
        </SectionLayout>

        <SectionLayout number={3} title=" Me contacter" id="contact">
          <ContactSection />
        </SectionLayout>
        <Footer />
      </main>
    </NavbarProvider>
  );
}
