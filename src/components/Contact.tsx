import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa'
// import emailjs from '@emailjs/browser'
import linksData from '../../data/links.json'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Note: You'll need to configure EmailJS with your service ID, template ID, and public key
      // For now, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-lightest-slate mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lightest-slate font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-light-navy border border-lightest-navy rounded-md 
                           text-lightest-slate placeholder-slate focus:outline-none focus:border-green 
                           transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lightest-slate font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-light-navy border border-lightest-navy rounded-md 
                           text-lightest-slate placeholder-slate focus:outline-none focus:border-green 
                           transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lightest-slate font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-light-navy border border-lightest-navy rounded-md 
                           text-lightest-slate placeholder-slate focus:outline-none focus:border-green 
                           transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green text-center">Message sent successfully! I'll get back to you soon.</p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again or contact me directly.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-lightest-slate mb-6">
              Let's connect
            </h3>
            
            <div className="space-y-6 mb-8">
              <a
                href={`mailto:${linksData.email}`}
                className="flex items-center space-x-4 text-slate hover:text-green transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-light-navy border border-lightest-navy rounded-lg flex items-center justify-center group-hover:border-green transition-colors duration-200">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">{linksData.email}</p>
                </div>
              </a>
              
              <a
                href={`tel:${linksData.phone}`}
                className="flex items-center space-x-4 text-slate hover:text-green transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-light-navy border border-lightest-navy rounded-lg flex items-center justify-center group-hover:border-green transition-colors duration-200">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm">{linksData.phone}</p>
                </div>
              </a>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-heading font-semibold text-lightest-slate mb-4">
                Social Links
              </h4>
              <div className="flex space-x-4">
                <a
                  href={linksData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-light-navy border border-lightest-navy rounded-lg flex items-center justify-center text-slate hover:text-green hover:border-green transition-all duration-200"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={linksData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-light-navy border border-lightest-navy rounded-lg flex items-center justify-center text-slate hover:text-green hover:border-green transition-all duration-200"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 