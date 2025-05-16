import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { getThemeClass } = useTheme();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "support@softshell.com",
      link: "mailto:support@softshell.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "123 Tech Street, Silicon Valley, CA 94043",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${getThemeClass("background", "primary")}`}
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
            We're Waiting to
            <span className={getThemeClass("text", "accent")}>
              {" "}
              Listen You
            </span>
          </h2>
          <p
            className={`text-lg ${getThemeClass(
              "text",
              "secondary"
            )} max-w-2xl mx-auto`}
          >
            Have questions? We're here to help. Contact us through any of these
            channels.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${getThemeClass(
            "card"
          )} rounded-xl p-8 shadow-lg max-w-2xl mx-auto`}
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  className={`block ${getThemeClass("text", "primary")} mb-2`}
                >
                  Name
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg ${getThemeClass(
                    "input"
                  )}`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className={`block ${getThemeClass("text", "primary")} mb-2`}
                >
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 rounded-lg ${getThemeClass(
                    "input"
                  )}`}
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label
                className={`block ${getThemeClass("text", "primary")} mb-2`}
              >
                Message
              </label>
              <textarea
                className={`w-full px-4 py-2 rounded-lg ${getThemeClass(
                  "input"
                )} h-32`}
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`${getThemeClass(
                "button",
                "primary"
              )} px-6 py-3 rounded-lg flex items-center justify-center gap-2 w-full`}
            >
              Send Message
              <Send size={20} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
