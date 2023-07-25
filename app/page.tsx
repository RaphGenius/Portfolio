import Navbar from "./components/navbar";
import SideInformations from "./components/sideInformations";
import NavbarProvider from "./context/navbarContext";
import Header from "./sections/header";
import SectionLayout from "./sections/layout";

export default function Home() {
  return (
    <NavbarProvider>
      <main className="bg-bgColor ">
        <Navbar />
        <SideInformations />
        <Header />
        <SectionLayout title="À propos" id="about">
          {" "}
          Yo cest moi
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
