
import Header from '../components/Header';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Publications from '../components/Publications';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-600 text-white font-mono overflow-x-auto">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        <Experience />
        <Education />
        <Publications />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
