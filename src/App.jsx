import './App.css';
import AboutMain from './components/aboutSection/AboutMain';
import ApplicationMain from './components/applicationSection/ApplicationMain';
import ContactMain from './components/contactSection/ContactMain';
import FooterMain from './components/footerSection/FooterMain';
import GoalsMain from './components/goalsSection/GoalsMain';
import HeroMain from './components/HeroSection/HeroMain';
import NavbarMain from './components/navbar/NavbarMain';
import ProgramsMain from './components/programsSection/ProgramsMain';

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <section id="Home">
        <HeroMain />
      </section>
      <section id="About">
        <AboutMain />
      </section>
      <section id="Programs">
        <ProgramsMain />
      </section>
      <section id="Goals">
        <GoalsMain />
      </section>
      <section id="Application">
        <ApplicationMain />
      </section>
      <section id="Contact">
        <ContactMain />
      </section>
      <FooterMain />
    </main>
  );
}

export default App;