import { motion } from "framer-motion";
import { Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
  { icon: <Mail className="w-5 h-5" />, href: "#contact", label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 bg-foreground text-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="inline-flex items-center gap-2 text-2xl font-display font-bold mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              AIToyz
            </a>
            <p className="text-background/70 leading-relaxed">
              Building the future with playful, powerful AI products that make technology delightful.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-lg mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-background/60 text-sm">
            © {currentYear} AIToyz. All rights reserved.
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1">
            Made with <span className="text-accent">♥</span> and AI
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
