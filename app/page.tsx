import Navbar from "./components/navbar";
import SideInformations from "./components/sideInformations";
import NavbarProvider from "./context/navbarContext";
import AboutSection from "./sections/about";
import Header from "./sections/header";
import SectionLayout from "./sections/layout";

export default function Home() {
  return (
    <NavbarProvider>
      <main id="home" className="bg-bgColor ">
        <Navbar />
        <SideInformations />
        <Header />
        <SectionLayout title="A propos de moi" id="about">
          <AboutSection />
        </SectionLayout>
        <SectionLayout title="Projets" id="projets">
          Mes projets{" "}
        </SectionLayout>
        <SectionLayout title="Me contacter" id="contact">
          {" "}
          Me contacter{" "}
        </SectionLayout>
      </main>
    </NavbarProvider>
  );
}
