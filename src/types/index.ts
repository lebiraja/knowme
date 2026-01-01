export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  tooltip: string;
  ariaLabel: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
