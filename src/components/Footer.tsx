
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Produits', href: '#produits' },
    { name: 'Inspirations', href: '#inspirations' },
    { name: 'Contact', href: '#contact' },
  ];

  const productCategories = [
    'Dalles de sol',
    'Faïence murale',
    'Sanitaires',
    'Baignoires',
    'Colonnes de douche',
    'Mobilier salle de bain',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-industrial-dark text-white">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-industrial-accent to-industrial-copper rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold font-playfair">
                MatériaPro
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire privilégié pour tous vos projets de construction. 
              15 ans d'expertise au service de la qualité.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-industrial-accent flex-shrink-0" />
                <span className="text-gray-300">123 Avenue des Matériaux, 69000 Lyon</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-industrial-accent flex-shrink-0" />
                <span className="text-gray-300">+33 4 78 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-industrial-accent flex-shrink-0" />
                <span className="text-gray-300">contact@materiapro.fr</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-industrial-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos produits</h3>
            <ul className="space-y-3">
              {productCategories.map((product) => (
                <li key={product}>
                  <span className="text-gray-300 text-sm">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Restez informés</h3>
            
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-4">
                Recevez nos dernières nouveautés et conseils d'experts.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-industrial-accent"
                />
                <button className="bg-industrial-accent hover:bg-industrial-copper px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                  OK
                </button>
              </div>
            </div>

            <div>
              <p className="text-gray-300 text-sm mb-4">Suivez-nous</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-industrial-accent transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 MatériaPro. Tous droits réservés.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-industrial-accent transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-industrial-accent transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-industrial-accent transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
