import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Embroidery Digitizing",
    "Graphic Design",
    "UI/UX Design",
    "IT Training",
    "Brand Identity"
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-3">
                Professor Ghulam Mustafa
              </h3>
              <p className="text-white/80 leading-relaxed">
                IT Trainer & Design Expert with 20+ years of experience. 
                Empowering students and businesses through professional 
                design and technology education.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">+92 333 4868920</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">graceinsitute.lhr@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-white/10 p-2 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm">A-2, Johar Town, Lahore</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-heading">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-heading">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats & Achievements */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-heading">Global Impact</h4>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent-light">4,000+</div>
                <div className="text-sm text-white/80">Students Trained</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent-light">135+</div>
                <div className="text-sm text-white/80">Countries Reached</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent-light">20+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-sm">
              © {currentYear} Professor Ghulam Mustafa. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>for global education & design excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;