import { useInViewAnimation } from '../hooks/useInViewAnimation';

const projects = [
  {
    name: 'evr',
    description: 'From idea to millions raised for a web3 AI product',
    image: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    name: 'Automation Machines',
    description: 'Streamlining industrial automation processes',
    image: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    name: 'xPortfolio',
    description: 'Modern portfolio management platform',
    image: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
];

function ProjectItem({ project }: { project: (typeof projects)[0] }) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div ref={ref}>
      <div
        className={`ml-20 md:ml-28 mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#051A24]">{project.name}</h3>
        <p className="text-sm md:text-base text-[#051A24]/70 mt-1">{project.description}</p>
      </div>
      <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="max-w-[1200px] px-6 py-12 mx-auto">
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
