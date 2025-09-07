import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achivements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
  <section id="home"><Home /></section>
  <section id="skills"><Skills /></section>
  <section id="projects"><Projects /></section>
  <section id="education"><Education /></section>
  <section id="achievements"><Achievements /></section>
  <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}