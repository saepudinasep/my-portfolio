import Logo from '@/components/navbar/Logo';
import Link from 'next/link';
import React from 'react';
import { LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu';

const socials = [
  {
    icon: LuGithub,
    href: 'mailto:saepudinasep2001@gmail.com',
  },
  {
    icon: LuLinkedin,
    href: 'https://wa.me/6285721485664',
  },
  {
    icon: LuInstagram,
    href: '#',
  },
];

export default function Footer() {
  return (
    <footer className='relative border-t border-border bg-background overflow-hidden'>
      {/* background glow */}
      <div className='absolute top-1/2 left-1/4 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10' />
      <div className='w-[90%] max-w-6xl mx-auto py-14 space-y-10 relative z-10'>
        {/* top section */}
        <div className='flex flex-col items-center text-center gap-8 md:flex-row md:items-start md:justify-between md:text-left'>
          <div className='space-y-3 max-w-xs'>
            <div className='flex justify-center md:justify-start'>
              <Logo />
            </div>
            <p className='text-sm text-gray-300'>
              Crafting modern, scalable web experiences with clean code and thoughtful design.
            </p>
          </div>

          {/* socials */}
          <div className='flex items-center gap-4'>
            {socials.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className='w-10 h-10 rounded-full flex items-center justify-center border border-border text-gray-300 hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(32,178.166,0.2)]'
              >
                <item.icon className='w-5 h-5' />
              </Link>
            ))}
          </div>
        </div>
        <div className='h-px bg-border' />

        {/* bottom footer */}
        <p className='text-center text-gray-400 text-sm'>
          &copy; {new Date().getFullYear()} Asep. All right reserved
        </p>
      </div>
    </footer>
  );
}
