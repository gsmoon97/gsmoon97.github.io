
import Header from '../components/Header';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Publications from '../components/Publications';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Taskbar from '../components/Taskbar';

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-blue-600 text-white font-mono overflow-x-auto">
      <div className="container mx-auto px-4 py-8 pb-24 max-w-4xl">
        <Header />
        <Experience />
        <Education />
        <Publications />
        <Skills />
        <Footer />
      </div>
      <Taskbar />
    </div>
  );
};

export default Index;
