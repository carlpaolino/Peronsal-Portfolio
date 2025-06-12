import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import linksData from '../../data/links.json'

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="resume" className="section-padding pt-24 pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold heading-gradient mb-4">
            Resume
          </h2>
          <div className="w-16 h-1 bg-green mx-auto mb-6"></div>
          <p className="text-slate text-lg max-w-2xl mx-auto mb-8">
            Take a look at my professional experience and qualifications. 
            Feel free to download a copy for your records.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={linksData.resumeURL}
              download="Carl_Paolino_Resume.pdf"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>
            <a
              href={linksData.resumeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <FaExternalLinkAlt />
              <span>Open in New Tab</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-light-navy rounded-lg border border-lightest-navy overflow-hidden"
        >
          <div className="bg-lightest-navy px-6 py-4 flex items-center justify-between">
            <h3 className="text-lg font-heading font-semibold text-navy">
              Carl Paolino Resume.pdf
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-navy/70">PDF Document</span>
              <a
                href={linksData.resumeURL}
                download="Carl_Paolino_Resume.pdf"
                className="text-navy hover:text-green transition-colors duration-200"
              >
                <FaDownload size={16} />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <iframe
              src={`${linksData.resumeURL}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-[800px] lg:h-[1000px]"
              title="Carl Paolino Resume"
              loading="lazy"
            />
            
            {/* Fallback for browsers that don't support PDF preview */}
            <div className="absolute inset-0 flex items-center justify-center bg-light-navy/90 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center p-8">
                <div className="text-6xl text-green mb-4">📄</div>
                <h4 className="text-xl font-heading font-semibold text-lightest-slate mb-2">
                  Resume Preview
                </h4>
                <p className="text-slate mb-6">
                  Click below to download or view the full resume
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={linksData.resumeURL}
                    download="Carl_Paolino_Resume.pdf"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <FaDownload />
                    <span>Download PDF</span>
                  </a>
                  <a
                    href={linksData.resumeURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center space-x-2"
                  >
                    <FaExternalLinkAlt />
                    <span>View Full Screen</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <p className="text-slate text-sm mt-2">
            Have questions about my experience? 
            <a 
              href="#contact" 
              className="text-green hover:text-lightest-slate transition-colors duration-200 ml-1"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in touch!
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume 