import SocialLinks from './components/SocialLinks';
import BackToTop from './components/BackToTop';
import SimpleBackground from './components/SimpleBackground';
import { useScrollDetection } from './hooks/useScrollDetection';
import './styles/App.css';

const App = () => {
  const showBackToTop = useScrollDetection(300);

  return (
    <>
      <SimpleBackground />

      <div className="app">
        <div className="container">
          <h1 className="title">Connect with Me</h1>
          <SocialLinks />
        </div>
      </div>

      <BackToTop show={showBackToTop} />
    </>
  );
};

export default App;
