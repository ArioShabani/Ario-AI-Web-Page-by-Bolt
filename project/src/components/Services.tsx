import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BrainCircuit, 
  GraduationCap, 
  Building2, 
  Bot,
  Lightbulb,
  ShoppingCart
} from 'lucide-react';

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "AI Strategy Planning",
      description: "Custom AI strategies aligned with your business goals and market demands.",
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Youth AI Education",
      description: "Specialized programs for ages 12-16, introducing the future generation to AI technology.",
      bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Business AI Integration",
      description: "Complete digital transformation with AI-powered automation and tools.",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Development",
      description: "Custom AI solution development for your specific business needs.",
      bgImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Lab",
      description: "Cutting-edge AI research and development for breakthrough solutions.",
      bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce AI",
      description: "Smart retail solutions powered by advanced AI technology.",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    }
  ];

  return (
    <div className="bg-[#0F0A1F] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300">
            Comprehensive AI solutions for modern businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="relative overflow-hidden rounded-xl group"
              style={{
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-[#0F0A1F] group-hover:from-blue-800/90 transition-all duration-300"></div>
              <div className="relative p-8">
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};