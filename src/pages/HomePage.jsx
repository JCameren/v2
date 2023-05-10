import Hero from "../components/Hero";
import Nav from "../components/layouts/Nav";
import ProjectSection from "../components/ProjectSection";

export default function HomePage() {
  return (
    <Nav>
      <Hero />
      <ProjectSection />
    </Nav>
  );
}
