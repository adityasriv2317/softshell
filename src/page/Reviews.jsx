import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Reviews = () => {
  const { getThemeClass } = useTheme();

  const reviews = [
    {
      name: "John Smith",
      role: "Software Developer",
      organization: "TechCorp Solutions",
      comment:
        "The process was incredibly smooth and professional. I received payment within 24 hours of listing my license.",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Sarah Johnson",
      role: "IT Manager",
      organization: "Global Systems Inc.",
      comment:
        "Best platform for selling software licenses. The verification process was quick and the support team was very helpful.",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <section
      id="reviews"
      className={`py-20 ${getThemeClass("background", "secondary")}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold ${getThemeClass(
              "text",
              "primary"
            )} mb-4`}
          >
            Our Clients
            <span className={getThemeClass("text", "accent")}> Believe Us</span>
          </h2>
          <p
            className={`text-lg ${getThemeClass(
              "text",
              "secondary"
            )} max-w-2xl mx-auto`}
          >
            Don't just take our word for it. Here's what our clients have to say
            about their experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${getThemeClass(
                "card"
              )} rounded-xl p-6 shadow-lg relative`}
            >
              <div className={`${getThemeClass("text", "accent")} mb-4`}>
                <Quote size={40} />
              </div>
              <p
                className={`${getThemeClass(
                  "text",
                  "secondary"
                )} mb-6 text-lg italic`}
              >
                {review.comment}
              </p>
              <div className="flex items-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3
                    className={`text-lg font-semibold ${getThemeClass(
                      "text",
                      "primary"
                    )}`}
                  >
                    {review.name}
                  </h3>
                  <p className={getThemeClass("text", "secondary")}>
                    {review.role}
                  </p>
                  <p className={`text-sm ${getThemeClass("text", "accent")}`}>
                    {review.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
