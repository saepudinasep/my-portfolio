'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import LinkButton from '../ui/LinkButton';
import { LuDownload, LuMenu, LuX } from 'react-icons/lu';
import MobileNav from './MobileNav';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-60 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl' : 'bg-transparent'}`}
      >
        <div className='w-[95%] lg:w-[90%] mx-auto h-16 flex items-center justify-between'>
          {/* logo */}
          <Logo />

          {/* desktop nav */}
          <ul className='hidden lg:flex items-center gap-1 py-2.5 px-1 rounded-full bg-surface/60 backdrop-blur-xl border border-border'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className='px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-primary hover:bg-surface'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className='hidden lg:block'>
            <LinkButton
              iconPosition='left'
              icon={LuDownload}
              rounded
              text='download CV'
              href='/documents/cv.pdf'
              download
            />
          </div>
          <button
            className='z-50 lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-border bg-surface/60 text-text hover:border-primary hover:text-primary transition'
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <LuX size={22} /> : <LuMenu size={22} />}
          </button>
        </div>
      </nav>

      <MobileNav navOpen={navOpen} />
    </>
  );
}
