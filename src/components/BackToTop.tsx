import { ArrowUp } from 'lucide-react';
import '../styles/BackToTop.css';

interface BackToTopProps {
  show: boolean;
}

const BackToTop = ({ show }: BackToTopProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp />
    </button>
  );
};

export default BackToTop;
