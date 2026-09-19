import ProjectCard from '@/components/project/ProjectCard';
import SectionHeader from '@/components/ui/SectionHeader';

const projects = [
  {
    title: 'Snapkeun Photobooth',
    description: 'A Modern analytics dashboard built with Next.js, Prisma, and PostgreSQL',
    image: '/images/p1.png',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    liveURL: '#',
    githubURL: '#',
  },
  {
    title: 'Snapkeun Photobooth',
    description: 'A Modern analytics dashboard built with Next.js, Prisma, and PostgreSQL',
    image: '/images/p1.png',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    liveURL: '#',
    githubURL: '#',
  },
  {
    title: 'Snapkeun Photobooth',
    description: 'A Modern analytics dashboard built with Next.js, Prisma, and PostgreSQL',
    image: '/images/p1.png',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    liveURL: '#',
    githubURL: '#',
  },
  {
    title: 'Snapkeun Photobooth',
    description: 'A Modern analytics dashboard built with Next.js, Prisma, and PostgreSQL',
    image: '/images/p1.png',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    liveURL: '#',
    githubURL: '#',
  },
];

export default function ProjectSection() {
  return (
    <section id='projects' className='py-24 relative'>
      {/* background glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10' />
      <div className='w-[90%] max-w-6xl mx-auto space-y-12'>
        <SectionHeader
          title='Some of my recent'
          highlight='work'
          badge='Projects'
          description='A selection of projects showcasing my ability to design, build, and scale, modern fullstack applications'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'>
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos='fade-right'
              data-aos-delay={index * 100}
              data-aos-achor-placement='top-center'
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
