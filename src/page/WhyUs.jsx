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
  Zap,
  DollarSign,
  Headset,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const WhyUs = () => {
  const { getThemeClass } = useTheme();

  const features = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Your transactions are protected with industry-standard security measures and encryption.",
    },
    {
      icon: Zap,
      title: "Fast Process",
      description: "Get your license verified and receive payment within 48 hours of submission.",
    },
    {
      icon: DollarSign,
      title: "Best Value",
      description: "We offer competitive prices based on current market rates and demand analysis.",
    },
    {
      icon: Headset,
      title: "Expert Support",
      description: "Our dedicated support team is available 24/7 to assist you with any questions.",
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
    <section id="why-us" className={`py-20 ${getThemeClass('background', 'primary')}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${getThemeClass('text', 'primary')} mb-4`}>
            Why<span className={getThemeClass('text', 'accent')}>
                {" "}
                Choose Us
              </span>
          </h2>
          <p className={`text-lg ${getThemeClass('text', 'secondary')} max-w-2xl mx-auto`}>
            We provide the best service for buying and selling software licenses with unmatched benefits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${getThemeClass('card')} rounded-xl p-6 shadow-lg`}
            >
              <div className={`${getThemeClass('text', 'accent')} mb-4`}>
                <feature.icon size={40} />
              </div>
              <h3 className={`text-xl font-semibold ${getThemeClass('text', 'primary')} mb-3`}>
                {feature.title}
              </h3>
              <p className={getThemeClass('text', 'secondary')}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

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
