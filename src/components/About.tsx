import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import profileData from '../../data/profile.json'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-start bg-gradient-to-br from-navy via-light-navy to-navy py-24"
      style={{ overflowY: 'auto' }}
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <h2 className="text-5xl lg:text-6xl font-heading font-bold heading-gradient mb-4 drop-shadow-lg">
            About Me
          </h2>
          <div className="w-20 h-1 bg-green mx-auto rounded-full shadow-md"></div>
        </motion.div>

        <div className="w-full flex flex-col items-center gap-12">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full bg-navy/80 rounded-2xl shadow-xl p-10 text-center border border-green/10 backdrop-blur-md"
          >
            <p className="text-slate text-xl leading-relaxed mb-0 font-medium">
              {profileData.bio}
            </p>
          </motion.div>

          {/* What I'm Looking For Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full bg-navy/80 rounded-2xl shadow-xl p-10 text-center border border-green/10 backdrop-blur-md"
          >
            <h3 className="text-3xl font-heading font-semibold text-lightest-slate mb-6 drop-shadow">
              What I'm looking for
            </h3>
            <ul className="flex flex-col items-center gap-4">
              {profileData.lookingFor.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex items-center text-slate text-lg font-normal"
                >
                  <span className="w-3 h-3 bg-green rounded-full mr-3 flex-shrink-0 shadow"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 