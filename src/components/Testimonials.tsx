import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "Aether has completely transformed how we build and ship products. The performance is unmatched.",
    author: "Sarah Chen",
    role: "CTO at TechCorp",
    avatar: "SC",
    gradient: "from-electric to-cyan",
  },
  {
    content: "The best developer experience I've encountered in years. It's like having superpowers.",
    author: "Marcus Rodriguez",
    role: "Lead Engineer at StartupX",
    avatar: "MR",
    gradient: "from-purple to-pink",
  },
  {
    content: "We scaled from 1K to 1M users without any infrastructure changes. Absolutely incredible.",
    author: "Emily Watson",
    role: "Founder at GrowthLab",
    avatar: "EW",
    gradient: "from-orange to-red",
  },
];

const companies = ['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Quantum', 'Pulse'];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 glass-card text-sm text-cyan mb-6"
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Loved by teams</span>
            <span className="gradient-text">worldwide</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="glass-card-hover p-8"
            >
              {/* Quote Icon */}
              <svg className="w-10 h-10 text-white/10 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Content */}
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center font-semibold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-white/50">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Companies Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative"
        >
          <p className="text-center text-sm text-white/40 mb-8">Trusted by innovative teams at</p>
          
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -500] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-16"
            >
              {[...companies, ...companies].map((company, index) => (
                <div key={`${company}-${index}`} className="text-xl font-semibold text-white/30 whitespace-nowrap">
                  {company}
                </div>
              ))}
            </motion.div>
            
            {/* Gradient masks */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-deep to-transparent" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-deep to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
