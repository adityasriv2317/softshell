import React, { useState, useEffect, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaRobot, FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { Send, X, Bot, User } from "lucide-react";

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const messagesEndRef = useRef(null);

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    const chatContainer = document.getElementById("chat-messages");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message.trim();
    setMessage("");
    setLoading(true);

    // Add user message to chat
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
        expanded: false,
      },
    ]);

    try {
      const query = generatePrompt();
      const apiKey = import.meta.env.VITE_API_KEY;
      const apiUrl = import.meta.env.VITE_API_URL;
      const botApi = `${apiUrl}${apiKey}`;

      const requestData = {
        contents: [{ parts: [{ text: query }] }],
      };

      const res = await axios.post(botApi, requestData, {
        headers: { "Content-Type": "application/json" },
      });

      const response =
        res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      const botMessage = {
        sender: "bot",
        text: response,
        expanded: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I encountered an error. Please try again later.",
          expanded: false,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const toggleExpand = (index) => {
    setMessages((prev) =>
      prev.map((msg, i) =>
        i === index ? { ...msg, expanded: !msg.expanded } : msg
      )
    );
  };

  const generatePrompt = () => {
    let prompt = `this is a prompt for a software resale company website named SoftShell. please provide the best possible response to the user's question as a chatbot. please be friendly and professional. and also provide response as a chatbot from the website named SoftShell that is a software resale company website. make it brief and to the point. and also please only provide the chatbot response.
    question is - ${message}`;

    return prompt;
  };

  // Calculate button position based on scroll
  const buttonPosition = scrollPosition > 300 ? "right-16 sm:right-20" : "right-4 sm:right-6";

  return (
    <div className={`fixed bottom-4 ${buttonPosition} z-50 transition-all duration-300`}>
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          >
            <div className="bg-white dark:bg-gray-800 w-full max-w-[95%] sm:max-w-[85%] md:max-w-lg h-[90vh] sm:h-[85vh] md:h-[80vh] rounded-xl shadow-2xl flex flex-col overflow-hidden">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Bot className="text-blue-600 dark:text-blue-400" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Chat Support
                  </h3>
                </div>
                <button
                  onClick={() => setChatOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      }`}
                    >
                      {message.sender === "bot" && message.text.length > 300 ? (
                        <div className="space-y-2">
                          <p className="text-sm sm:text-base leading-relaxed">
                            {message.expanded
                              ? message.text
                              : `${message.text.slice(0, 300)}...`}
                          </p>
                          <button
                            onClick={() => toggleExpand(index)}
                            className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium"
                          >
                            {message.expanded ? "Show Less" : "Read More"}
                          </button>
                        </div>
                      ) : (
                        <p className="text-sm sm:text-base leading-relaxed">
                          {message.text}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-gray-900 dark:text-white">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <form
                onSubmit={handleSendMessage}
                className="p-4 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    <Send size={20} />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      {!chatOpen && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setChatOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Bot size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default Chatbot;
