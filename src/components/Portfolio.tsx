import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'
import projectsData from '../../data/projects.json'

interface Project {
  id: string
  title: string
  blurb: string
  descriptionMD: string
  tech: string[]
  image: string
  liveUrl?: string
  githubUrl: string
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Categorize projects
  const generalProjects = projectsData.filter(project => 
    ['drone-comm-system','activity-planner', 'fitness-app', 'medical ai assistant'].includes(project.id)
  )
  
  const aiMlProjects = projectsData.filter(project => 
    ['ai-agent','investing assistant', 'mock interview platform', 'house-price-ml'].includes(project.id)
  )

  const parseMarkdown = (markdown: string) => {
    // Simple markdown parser for basic formatting
    return markdown
      .replace(/### (.*)/g, '<h3 class="text-xl font-heading font-semibold text-green mb-3 mt-6">$1</h3>')
      .replace(/## (.*)/g, '<h2 class="text-2xl font-heading font-bold text-lightest-slate mb-4 mt-8">$1</h2>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-lightest-slate font-semibold">$1</strong>')
      .replace(/- (.*)/g, '<li class="ml-4 mb-2 text-slate">$1</li>')
      .replace(/\n/g, '<br />')
  }

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="project-card cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      <div className="aspect-video bg-lightest-navy rounded-md mb-3 overflow-hidden relative">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-contain bg-lightest-navy transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder-project.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-navy/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lightest-slate text-sm font-medium">Click to view details</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-heading font-semibold text-lightest-slate mb-2">
        {project.title}
      </h3>
      
      <p className="text-slate text-sm leading-relaxed mb-3 line-clamp-3">
        {project.blurb}
      </p>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.slice(0, 2).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-green/10 text-green text-xs rounded-full border border-green/20"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 2 && (
          <span className="px-2 py-1 bg-slate/10 text-slate text-xs rounded-full">
            +{project.tech.length - 2}
          </span>
        )}
      </div>
      
      <div className="flex justify-between items-center">
        <button className="text-green hover:text-lightest-slate transition-colors text-sm font-medium">
          View Details →
        </button>
        <div className="flex space-x-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate hover:text-green transition-colors"
            >
              <FaExternalLinkAlt size={16} />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-slate hover:text-green transition-colors"
          >
            <FaGithub size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="portfolio" className="section-padding pt-24 pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold heading-gradient mb-4">
            Portfolio
          </h2>
          <div className="w-16 h-1 bg-green mx-auto mb-6"></div>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Explore my current projects organized by focus area, from general development to AI/ML applications.
          </p>
        </motion.div>

        {/* Projects Section - Side by Side */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* General Development Projects */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl font-heading font-semibold text-green mb-6 text-center lg:text-left">
                General Development
              </h4>
              <div className="grid gap-4">
                {generalProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>

            {/* AI/ML Projects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-heading font-semibold text-green mb-6 text-center lg:text-left">
                AI/ML Development
              </h4>
              <div className="grid gap-4">
                {aiMlProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-light-navy rounded-lg p-8 max-w-4xl max-h-[90vh] overflow-y-auto relative border border-green/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate hover:text-green transition-colors"
              >
                <FaTimes size={24} />
              </button>
              
              <div className="mb-6">
                <div className="aspect-video bg-lightest-navy rounded-md mb-6 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} screenshot`}
                    className="w-full h-full object-contain bg-lightest-navy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder-project.jpg';
                    }}
                  />
                </div>

                <h2 className="text-3xl font-heading font-bold text-lightest-slate mb-4">
                  {selectedProject.title}
                </h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green/10 text-green text-sm rounded-full border border-green/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mb-8">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center space-x-2"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center space-x-2"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
              
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: parseMarkdown(selectedProject.descriptionMD) 
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio 