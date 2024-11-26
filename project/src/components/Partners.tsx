import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Globe } from 'lucide-react';

export const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const partners = [
    {
      name: "UKCO",
      region: "Europe",
      description: "Technical support and innovation partner based in the United Kingdom"
    },
    {
      name: "GERCO",
      region: "Europe",
      description: "Strategic technology partner providing advanced AI solutions from Germany"
    },
    {
      name: "UAECO",
      region: "Middle East",
      description: "Logistics and implementation partner in the UAE"
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Global Partners</h2>
          <p className="text-xl text-gray-300">
            Collaborating with leading technology providers worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                {partner.region === "Europe" ? (
                  <Globe className="w-8 h-8 text-blue-400" />
                ) : (
                  <Building className="w-8 h-8 text-blue-400" />
                )}
                <h3 className="text-xl font-semibold ml-3">{partner.name}</h3>
              </div>
              <p className="text-gray-400">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};