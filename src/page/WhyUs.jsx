import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  TrendingUp,
  LineChart,
  BarChart,
  PieChart,
  Activity,
} from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Trusted",
      description:
        "Bank-grade security with encrypted transactions and verified sellers.",
      color: "emerald",
      delay: 0.2,
    },
    {
      icon: Clock,
      title: "Fast Process",
      description:
        "Complete transactions within 48 hours with instant payment options.",
      color: "blue",
      delay: 0.3,
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "24/7 dedicated support team to guide you through every step.",
      color: "purple",
      delay: 0.4,
    },
    {
      icon: TrendingUp,
      title: "Best Market Value",
      description: "Get the highest possible value for your software licenses.",
      color: "amber",
      delay: 0.5,
    },
  ];

  const stats = [
    { number: "10K+", label: "Active Users", icon: Users },
    { number: "$50M+", label: "Total Value", icon: BarChart },
    { number: "98%", label: "Satisfaction", icon: PieChart },
    { number: "24/7", label: "Support", icon: Activity },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why{" "}
            <span className="text-blue-500 dark:text-blue-400"> Choose Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the difference with our comprehensive software license
            resale platform
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div
                  className={`w-16 h-16 rounded-2xl bg-${feature.color}-100 dark:bg-${feature.color}-900/20 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 mx-auto`}
                >
                  <feature.icon
                    className={`w-8 h-8 text-${feature.color}-600 dark:text-${feature.color}-400`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
