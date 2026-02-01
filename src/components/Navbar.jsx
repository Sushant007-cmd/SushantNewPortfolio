import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = ({ textColor }) => {
    const links = [
        { name: 'Skills', href: '#arsenal', type: 'scroll' },
        { name: 'Projects', href: '#projects', type: 'scroll' },
        { name: 'About me', href: '#about', type: 'scroll' },
        { name: 'Trojan', href: '/trojan', type: 'link' },
        { name: 'Contact', href: '#contact', type: 'scroll' },
        { name: 'Resume', href: 'https://drive.google.com/file/d/1pxnGTQ9uvHdsABhMhoM-_HH-M0T_u_-f/view?usp=sharing', type: 'external' },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 md:px-16 py-4 md:py-6 pointer-events-none"
        >
            <motion.div
                style={{ color: textColor }}
                className="flex items-center justify-center flex-wrap gap-4 md:gap-8 pointer-events-auto"
            >
                {links.map((link) => {
                    const baseClass = "text-[9px] md:text-sm font-bold uppercase tracking-[0.15em] hover:text-warrior-red transition-all whitespace-nowrap cursor-pointer";

                    if (link.type === 'scroll') {
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.querySelector(link.href);
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className={baseClass}
                            >
                                {link.name}
                            </a>
                        );
                    } else if (link.type === 'link') {
                        return (
                            <Link key={link.name} to={link.href} className={baseClass}>
                                {link.name}
                            </Link>
                        );
                    } else {
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={baseClass}
                            >
                                {link.name}
                            </a>
                        );
                    }
                })}
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;






