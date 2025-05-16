import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const Contact = () => {
  const { getThemeClass } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
        alert("Thank you for your message! We will get back to you soon.");
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@softshell.com",
      link: "mailto:support@softshell.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Street, Silicon Valley, CA 94043",
      link: "https://maps.google.com",
      description: "Schedule a meeting"
    }
  ];

  return (
    <section id="contact" className={`py-20 ${getThemeClass('background', 'primary')}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${getThemeClass('text', 'primary')} mb-4`}>
            We're Here to <span className={getThemeClass('text', 'accent')}>
                {" "}
                Listen You
              </span>
          </h2>
          <p className={`text-lg ${getThemeClass('text', 'secondary')} max-w-2xl mx-auto`}>
            Have questions about our services? We're here to help and answer any questions you might have.
          </p>
        </motion.div>


          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${getThemeClass('card')} max-w-2xl mx-auto rounded-xl p-8 shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`${getThemeClass('text', 'accent')} p-2 rounded-lg bg-opacity-10 ${getThemeClass('background', 'accent')}`}>
                <MessageSquare size={24} />
              </div>
              <h3 className={`text-2xl font-semibold ${getThemeClass('text', 'primary')}`}>
                Send us a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block ${getThemeClass('text', 'primary')} mb-2 font-medium`}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${getThemeClass('input')} ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className={`block ${getThemeClass('text', 'primary')} mb-2 font-medium`}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${getThemeClass('input')} ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className={`block ${getThemeClass('text', 'primary')} mb-2 font-medium`}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${getThemeClass('input')} h-32 ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${getThemeClass('button', 'primary')} px-6 py-3 rounded-lg flex items-center justify-center gap-2 w-full disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
      </div>
    </section>
  );
};

export default Contact;