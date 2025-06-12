import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import profileData from '../../data/profile.json'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="section-padding pt-24 pb-20 lg:pb-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold heading-gradient mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-green mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate text-lg leading-relaxed mb-8">
              {profileData.bio}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-heading font-semibold text-lightest-slate mb-4">
                What I'm passionate about:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profileData.interests.map((interest, index) => (
                  <motion.li
                    key={interest}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center text-slate"
                  >
                    <span className="w-2 h-2 bg-green rounded-full mr-3 flex-shrink-0"></span>
                    {interest}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-semibold text-lightest-slate mb-4">
                What I'm looking for:
              </h3>
              <ul className="space-y-3">
                {profileData.lookingFor.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start text-slate"
                  >
                    <span className="w-2 h-2 bg-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-full max-w-lg h-80 lg:h-96 rounded-lg overflow-hidden bg-light-navy border border-green/20">
                <img
                  src={profileData.aboutImage}
                  alt={`${profileData.name} - About Me`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback display if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-green/10 to-navy/50 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-center">
                    <div className="text-6xl font-heading font-bold text-green mb-4">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <p className="text-slate text-lg">{profileData.status}</p>
                    <p className="text-green text-sm mt-2">{profileData.location}</p>
                  </div>
                </div>
                
                {/* Overlay with status info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-6">
                  <p className="text-lightest-slate text-lg font-medium">{profileData.status}</p>
                  <p className="text-green text-sm">{profileData.location}</p>
                </div>
              </div>
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(100, 255, 218, 0.3)',
                    '0 0 40px rgba(100, 255, 218, 0.1)',
                    '0 0 20px rgba(100, 255, 218, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-lg pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 