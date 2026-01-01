import SocialLink from './SocialLink';
import { socialLinks } from '../data/socialLinks';
import '../styles/SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <SocialLink key={index} link={link} />
      ))}
    </div>
  );
};

export default SocialLinks;
