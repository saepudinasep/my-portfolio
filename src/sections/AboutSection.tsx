import Image from 'next/image';
import React from 'react';
import { LuCode, LuDatabase, LuRocket } from 'react-icons/lu';

export default function AboutSection() {
  return (
    <section id='about' className='py-24 overflow-hidden relative'>
      {/* background glow */}
      <div className='absolute top-1/4 left-1/2 -transalte-x-1/2 w-80 h-80 rounded-full blur-3xl' />
      <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/* leftside */}
        <div className='flex justify-center lg:justify-start'>
          <div className='relative w-85 h-85 md:w-120 md:h-120 rounded-2xl bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center'>
            <div className='absolute inset-0 rounded-2xl bg-primary/10 blur-2xl' />
            <div className='w-[85%] h-[85%] relative'>
              <Image
                fill
                src='/images/about.png'
                alt='About Me'
                className='z-10 object-cover rounded-xl'
              />
            </div>
          </div>
        </div>

        {/* rightside */}
        <div className='space-y-6'>
          <span className='text-sm text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-border inline-block'>
            About Me
          </span>

          <h2 className='text-3xl md:text-4xl font-bold text-text leading-tight'>
            I build scalable and user-focused web applications
          </h2>

          <p className='text-gray-400 max-w-xl'>
            I&apos;m a fullstack developer specializing in Next.js and modern web technologies. I
            enjoy building fast, scalable, and visually clean applications that solve real-world
            problems. My focus in on writing maintainable code and deliveri smooth user ecperiences.
          </p>
          <p className='text-gray-400 max-w-xl'>
            Over time, I&apos;ve worked with tools like TypeScript, Supabase, and modern UI system
            to create projects that are both functional and production-ready.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4'>
            <div className='p-4 rounded-xl bg-surface border border-border text-center'>
              <LuCode className='mx-auto mb-2 text-primary w-6 h-6' />
              <p className='text-text text-sm'>Clean Code</p>
            </div>
            <div className='p-4 rounded-xl bg-surface border border-border text-center'>
              <LuDatabase className='mx-auto mb-2 text-primary w-6 h-6' />
              <p className='text-text text-sm'>Fullstack Apps</p>
            </div>
            <div className='p-4 rounded-xl bg-surface border border-border text-center'>
              <LuRocket className='mx-auto mb-2 text-primary w-6 h-6' />
              <p className='text-text text-sm'>Performances</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
