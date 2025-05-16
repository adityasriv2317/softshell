import { motion, useScroll, useTransform } from 'framer-motion';
import { Upload, DollarSign, Wallet, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { ChartLine } from '../components/ChartLine';

const Steps = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const steps = [
    {
      icon: Upload,
      title: 'Upload License',
      description: 'Simply upload your software license details and documentation.',
      color: 'blue',
      features: ['Drag & drop support', 'Multiple file formats', 'Secure upload']
    },
    {
      icon: DollarSign,
      title: 'Get Valuation',
      description: 'Receive a fair market valuation within 24 hours.',
      color: 'green',
      features: ['Market analysis', 'Price comparison', 'Expert review']
    },
    {
      icon: Wallet,
      title: 'Get Paid',
      description: 'Accept our offer and receive payment within 48 hours.',
      color: 'purple',
      features: ['Secure payment', 'Multiple methods', 'Instant confirmation']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sell your software licenses in three simple steps. Fast, secure, and hassle-free.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Step Number */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg z-10"
              >
                {index + 1}
              </motion.div>

              {/* Step Card */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-[400px] flex flex-col">
                <div className={`w-20 h-20 rounded-2xl bg-${step.color}-100 dark:bg-${step.color}-900/20 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <step.icon className={`w-10 h-10 text-${step.color}-600 dark:text-${step.color}-400`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                  {step.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3 flex-grow">
                  {step.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 flex items-center gap-2 mx-auto cursor-pointer bg-blue-800/50 text-white rounded-xl hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Now
            <ChartLine />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Steps; 