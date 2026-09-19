import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';
import { LuQuote } from 'react-icons/lu';

const testimonials = [
  {
    name: 'David Okafor',
    role: 'Startup Founder',
    image: '/images/about.png',
    feedback: 'Working with Emmanuel was a great experience. He delivered a clean, scalable',
  },
  {
    name: 'David Okafor',
    role: 'Startup Founder',
    image: '/images/about.png',
    feedback: 'Working with Emmanuel was a great experience. He delivered a clean, scalable',
  },
  {
    name: 'David Okafor',
    role: 'Startup Founder',
    image: '/images/about.png',
    feedback: 'Working with Emmanuel was a great experience. He delivered a clean, scalable',
  },
  {
    name: 'David Okafor',
    role: 'Startup Founder',
    image: '/images/about.png',
    feedback: 'Working with Emmanuel was a great experience. He delivered a clean, scalable',
  },
];

export default function TestimonialSection() {
  return (
    <section id='testimonials' className='py-24 bg-background relative overflow-hidden'>
      {/* background glow */}
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10' />
      <div className='w-[90%] max-w-6xl mx-auto space-y-16'>
        <SectionHeader
          title='What people say about me'
          badge='Testimonials'
          description="Feedback from clients and collaborators 1've worked with on various projects."
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className='group relative p-6 rounded-2xl bg-surface border border-border transition-all duration-300 hover:-translate-y-1 hover:bg-primary/40 hover:shadow-lg'
            >
              <LuQuote className='absolute top-5 right-5 text-primary/10 w-10 h-10' />

              <p className='text-gray-300 leading-relaxed mb-6 pr-12'>
                &ldquo;{item.feedback}&rdquo;
              </p>
              <div className='flex items-center gap-4'>
                <Image
                  width={50}
                  height={50}
                  src={item.image}
                  alt={item.name}
                  className='w-12 h-12 rounded-full object-cover border border-border'
                />
                <div>
                  <h4 className='text-text font-semibold group-hover:text-primary transition'>
                    {item.name}
                  </h4>
                  <p className='text-sm text-gray-400'>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
