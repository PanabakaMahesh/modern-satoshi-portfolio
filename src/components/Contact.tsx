
import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      id: 'email',
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'panabakamahesh1637@gmail.com',
      href: 'mailto:panabakamahesh1637@gmail.com'
    },
    {
      id: 'phone',
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 9550025238',
      href: 'tel:+919550025238'
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Panabaka Mahesh',
      href: 'https://linkedin.com/'
    },
    {
      id: 'github',
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'PanabakaMahesh',
      href: 'https://github.com/'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/50 reveal">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex items-start hover:bg-secondary/50 p-3 rounded-lg transition-colors duration-200"
                  target={item.id === 'linkedin' || item.id === 'github' ? '_blank' : undefined}
                  rel={item.id === 'linkedin' || item.id === 'github' ? 'noopener noreferrer' : undefined}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Location</div>
                  <div className="font-medium">Chennai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="button"
                className="w-full inline-flex items-center justify-center h-12 px-6 rounded-md bg-primary text-primary-foreground font-medium transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
