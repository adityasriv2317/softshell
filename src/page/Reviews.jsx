import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      quote:
        "SoftShell made selling our unused software licenses incredibly easy. The process was smooth, secure, and we got a great value for our investment.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "Credex Technologies",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      quote:
        "As a growing startup, we needed to optimize our software spending. SoftShell helped us recoup significant costs from our unused licenses.",
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateX",
      image: "https://i.pravatar.cc/150?img=2",
    },
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
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Customers <span className="text-blue-500 dark:text-blue-400">
              {" "}
              Believe in Us
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by businesses worldwide for secure and efficient software
            license management
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {testimonial.quote}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
