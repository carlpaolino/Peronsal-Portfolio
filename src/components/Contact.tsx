import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import linksData from '../../data/links.json'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="contact" className="section-margin section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold heading-gradient mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-green mx-auto mb-6"></div>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-3xl font-heading font-semibold text-lightest-slate mb-12">
              Let's Connect
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.a
                href={`mailto:${linksData.email}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center p-8 bg-light-navy rounded-lg border border-lightest-navy hover:border-green transition-all duration-200 group"
              >
                <div className="w-16 h-16 bg-green/10 border border-green/20 rounded-full flex items-center justify-center group-hover:bg-green/20 transition-colors duration-200 mb-4">
                  <FaEnvelope size={24} className="text-green" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-lightest-slate mb-2">Email</h4>
                <p className="text-slate text-center">{linksData.email}</p>
              </motion.a>
              
              <motion.a
                href={`tel:${linksData.phone}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center p-8 bg-light-navy rounded-lg border border-lightest-navy hover:border-green transition-all duration-200 group"
              >
                <div className="w-16 h-16 bg-green/10 border border-green/20 rounded-full flex items-center justify-center group-hover:bg-green/20 transition-colors duration-200 mb-4">
                  <FaPhone size={24} className="text-green" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-lightest-slate mb-2">Phone</h4>
                <p className="text-slate text-center">{linksData.phone}</p>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <h4 className="text-xl font-heading font-semibold text-lightest-slate mb-6">
                Follow Me
              </h4>
              <div className="flex justify-center space-x-6">
                <a
                  href={linksData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-light-navy border border-lightest-navy rounded-lg flex items-center justify-center text-slate hover:text-green hover:border-green hover:bg-green/10 transition-all duration-200"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={linksData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-light-navy border border-lightest-navy rounded-lg flex items-center justify-center text-slate hover:text-green hover:border-green hover:bg-green/10 transition-all duration-200"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 