// FooterLink.js
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink = ({ to, label }: FooterLinkProps) => {
  return (
    <li>
      <Link to={to} className="text-sm text-muted-500 hover:text-primary-500 transition-colors duration-300">
        {label}
      </Link>
    </li>
  );
};

export default FooterLink;
