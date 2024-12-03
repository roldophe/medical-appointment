import { Link } from 'react-router-dom';
import Logo from "./base/Logo";
import FooterSection from './FooterSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const resourcesLinks = [
    { to: '#', label: 'Health Blog' },
    { to: '#', label: 'About Us' },
    { to: '#', label: 'Careers' },
    { to: '#', label: 'Privacy Policy' },
  ];

  const patientsLinks = [
    { to: '#', label: 'Find a Doctor' },
    { to: '#', label: 'Book an Appointment' },
    { to: '#', label: 'Teleconsultation' },
    { to: '#', label: 'Patient Support' },
  ];

  const doctorsLinks = [
    { to: '#', label: 'Join Our Network' },
    { to: '#', label: 'Doctor Dashboard' },
    { to: '#', label: 'Practice Management' },
    { to: '#', label: 'FAQs' },
  ];

  const developersLinks = [
    { to: '#', label: 'API Documentation' },
    { to: '#', label: 'Integration Guides' },
    { to: '#', label: 'CareHub for Developers' },
  ];

  const socialLinks = [
    { to: '#', icon: faFacebookF, label: 'Facebook' },
    { to: '#', icon: faTwitter, label: 'Twitter' },
    { to: '#', icon: faInstagram, label: 'Instagram' },
    { to: '#', icon: faLinkedinIn, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="w-full lg:w-2/6 px-4 mb-10">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Logo className="w-9 h-9 text-primary-600 dark:text-primary-400" />
              <span className="font-bold text-lg tracking-wide uppercase text-gray-800 dark:text-gray-100">CareHub</span>
            </Link>
            <p className="text-sm mb-6">
              Connecting patients with trusted doctors. Schedule appointments, access teleconsultations, and get health advice anytime.
            </p>
          </div>
          <FooterSection title="Resources" links={resourcesLinks} />
          <FooterSection title="Patients" links={patientsLinks} />
          <FooterSection title="Doctors" links={doctorsLinks} />
          <FooterSection title="Developers" links={developersLinks} />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-300 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
          <div className="w-full ltablet:w-auto lg:w-auto flex flex-col md:flex-row items-center justify-center md:justify-start gap-y-2">
            <div className="relative w-full sm:w-64 md:w-40 sm:mr-4 mr-2">
              <input
                type="email"
                aria-label="Email Address"
                className="w-full h-10 bg-muted-100 dark:bg-muted-700 bg-opacity-50 rounded-lg border border-muted-300 dark:border-muted-600 text-sm text-muted-700 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                placeholder="Email Address"
              />
            </div>
            <button
              className="w-full md:w-auto h-10 inline-flex items-center justify-center text-white bg-primary-600 border-0 py-2 px-6 focus:outline-none hover:bg-primary-700 rounded-lg"
            >
              Subscribe
            </button>
            <p className="text-muted-500 text-sm md:ml-2 md:mt-0 mt-2 sm:text-left text-center">
              to our Newsletter
            </p>
          </div>

          {/* Social Icons */}
          <div className="inline-flex ltablet:ml-auto lg:ml-auto md:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                to={social.to}
                aria-label={`Follow us on ${social.label}`}
                className="text-gray-500 dark:text-gray-400 hover:text-primary-500 mx-3"
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <p className="text-sm">
            © 2018-{new Date().getFullYear()} CareHub. All Rights Reserved.
          </p>
          <span className="text-sm">
            Built with <a href="https://react.dev/" className="hover:text-primary-500">ReactTS</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
