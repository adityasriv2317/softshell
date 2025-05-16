import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./page/Hero";
import Steps from "./page/Steps";
import WhyUs from "./page/WhyUs";
import Reviews from "./page/Reviews";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main>
          <Hero />
          <Steps />
          <WhyUs />
          <Reviews />
        </main>
        <Chatbot />
        <ScrollToTopButton />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
