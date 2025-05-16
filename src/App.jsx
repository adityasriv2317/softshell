import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./page/Hero";
import Steps from "./page/Steps";
import WhyUs from "./page/WhyUs";
import Reviews from "./page/Reviews";
import Contact from "./page/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
          <Navbar />
          <main>
            <Hero />
            <Steps />
            <WhyUs />
            <Reviews />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
          <ScrollToTopButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
