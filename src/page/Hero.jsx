import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import hero from "../assets/hero.jpg";

const Hero = () => {
  const { getThemeClass } = useTheme();

  return (
    <section
      id="hero"
      className={`relative min-h-[90vh] flex items-center ${getThemeClass(
        "background",
        "primary"
      )} pt-20`}
    >
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#374151_1px,transparent_1px)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${getThemeClass(
                "text",
                "primary"
              )} mb-6`}
            >
              Get Licensed Softwares with
              <span className={getThemeClass("text", "accent")}>
                {" "}
                Reliability
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-lg md:text-xl ${getThemeClass(
                "text",
                "secondary"
              )} mb-8 max-w-2xl mx-auto lg:mx-0`}
            >
              Buy and sell software licenses with confidence. Get the best value
              for your software investments with our trusted marketplace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${getThemeClass(
                  "button",
                  "primary"
                )} px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2`}
              >
                Get a Quote
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${getThemeClass(
                  "button",
                  "secondary"
                )} px-8 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2`}
              >
                Sell My Licenses
                <TrendingUp size={20} />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div
                  className={`text-3xl font-bold ${getThemeClass(
                    "text",
                    "accent"
                  )} mb-2`}
                >
                  10K+
                </div>
                <div className={getThemeClass("text", "secondary")}>
                  Active Users
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-3xl font-bold ${getThemeClass(
                    "text",
                    "accent"
                  )} mb-2`}
                >
                  $50M+
                </div>
                <div className={getThemeClass("text", "secondary")}>
                  Licenses Sold
                </div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div
                  className={`text-3xl font-bold ${getThemeClass(
                    "text",
                    "accent"
                  )} mb-2`}
                >
                  98%
                </div>
                <div className={getThemeClass("text", "secondary")}>
                  Satisfaction Rate
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/10 rounded-2xl transform rotate-4"></div>
              <img src={hero} className="rounded-2xl" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
