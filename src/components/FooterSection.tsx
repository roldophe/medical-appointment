// FooterSection.js
import FooterLink from './FooterLink';

interface FooterSectionProps {
  title: string;
  links: { to: string; label: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div className="lg:w-1/6 ltablet:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="font-medium tracking-widest text-sm mb-5 text-muted-800 dark:text-white">
        {title}
      </h2>
      <ul className="list-none space-y-3 mb-10">
        {links.map((link, index) => (
          <FooterLink key={index} to={link.to} label={link.label} />
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
