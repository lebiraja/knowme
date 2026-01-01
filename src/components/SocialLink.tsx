import { SocialLink as SocialLinkType } from '../types';
import '../styles/SocialLink.css';

interface SocialLinkProps {
  link: SocialLinkType;
}

const SocialLink = ({ link }: SocialLinkProps) => {
  return (
    <a
      href={link.url}
      target={link.url.startsWith('http') ? '_blank' : undefined}
      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={link.ariaLabel}
      className="social-link ripple"
    >
      <div className="social-link-content">
        <img src={link.icon} alt={`${link.name} logo`} className="social-icon" />
        <span className="social-name">{link.name}</span>
      </div>
    </a>
  );
};

export default SocialLink;
