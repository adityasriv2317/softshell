import { motion } from "framer-motion";
import { Upload, Calculator, DollarSign } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Steps = () => {
  const { getThemeClass } = useTheme();

  const steps = [
    {
      icon: Upload,
      title: "Upload License",
      description:
        "Start by uploading your software license details. Our system will verify its authenticity.",
      features: [
        "Quick verification process",
        "Secure file upload",
        "Multiple format support",
      ],
    },
    {
      icon: Calculator,
      title: "Get Valuation",
      description:
        "Receive an instant valuation of your license based on current market rates and demand.",
      features: [
        "Real-time market analysis",
        "Competitive pricing",
        "Transparent valuation",
      ],
    },
    {
      icon: DollarSign,
      title: "Get Paid",
      description:
        "Once your license is verified and valued, receive payment through secure channels.",
      features: [
        "Multiple payment options",
        "Fast processing",
        "Secure transactions",
      ],
    },
  ];

  return (
    <section
      id="steps"
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
            How
            <span className={getThemeClass("text", "accent")}> It Works</span>
          </h2>
          <p
            className={`text-lg ${getThemeClass(
              "text",
              "secondary"
            )} max-w-2xl mx-auto`}
          >
            Selling your software license is simple and secure with our
            three-step process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`${getThemeClass("card")} rounded-xl p-6 shadow-lg`}
            >
              <div className={`${getThemeClass("text", "accent")} mb-4`}>
                <step.icon size={40} />
              </div>
              <h3
                className={`text-xl font-semibold ${getThemeClass(
                  "text",
                  "primary"
                )} mb-3`}
              >
                {step.title}
              </h3>
              <p className={`${getThemeClass("text", "secondary")} mb-4`}>
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center ${getThemeClass(
                      "text",
                      "secondary"
                    )}`}
                  >
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
