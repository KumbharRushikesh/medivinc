import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import robo from "../Images/robo.png"; // Bot image

const genAI = new GoogleGenerativeAI("AIzaSyAsLcDRoEQUvTv-q3VkBlCQgEBmHln4eBg", {
  apiVersion: "v1beta",
});

const GeminiChatbot = () => {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! Feel free to ask me about any product listed in the table.",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    setOpen((prev) => !prev);
    setShowPopup(false);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, isBot: false }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const prompt = `Give a short, general explanation of "${input}" (just basic product info, no personal or medical advice). Use this format:\n\nTitle: <Product Name>\nDescription: <Brief overview>\nPro: <One benefit>\nCon: <One drawback>.`;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent([prompt]);
      const responseText =
        result?.response?.candidates?.[0]?.content?.parts?.[0]?.text ??
        "Sorry, I couldn't understand.";

      const parsed = parseGeminiResponse(responseText);
      setMessages([
        ...newMessages,
        parsed,
        {
          isBot: true,
          isWarning: true,
          text: "⚠️ Important: Always use medicines or injections only after consulting a licensed medical professional.",
        },
      ]);
    } catch (err) {
      console.error("Error:", err);
      setMessages([
        ...newMessages,
        { text: "Sorry, something went wrong.", isBot: true },
      ]);
    }

    setLoading(false);
  };

  const parseGeminiResponse = (text) => {
    const titleMatch = text.match(/Title:\s*(.+)/i);
    const descriptionMatch = text.match(/Description:\s*(.+)/i);
    const proMatch = text.match(/Pro:\s*(.+)/i);
    const conMatch = text.match(/Con:\s*(.+)/i);

    if (titleMatch || descriptionMatch || proMatch || conMatch) {
      return {
        isBot: true,
        isFormatted: true,
        title: titleMatch?.[1] ?? "",
        description: descriptionMatch?.[1] ?? "",
        pro: proMatch?.[1] ?? "",
        con: conMatch?.[1] ?? "",
      };
    }

    return {
      text,
      isBot: true,
    };
  };

  useEffect(() => {
    if (!open) {
      const delay = setTimeout(() => {
        setShowPopup(true);
        const hide = setTimeout(() => setShowPopup(false), 4000);
        return () => clearTimeout(hide);
      }, 2000);
      return () => clearTimeout(delay);
    }
  }, [open]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-80 h-[500px] bg-white border-2 border-solid border-blue-900 rounded-xl shadow-lg flex flex-col overflow-hidden relative">
          {/* Header */}
          <div className="bg-blue-900 text-white flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <img src={robo} alt="bot" className="w-10 h-10 rounded-full" />
              <h2 className="font-semibold text-lg">Medivinc AI</h2>
            </div>
            <button
              onClick={toggleChat}
              className="text-white text-lg font-bold hover:text-red-400"
              title="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md max-w-[80%] whitespace-pre-wrap ${
                  msg.isBot
                    ? "bg-blue-100 text-left"
                    : "bg-gray-200 ml-auto text-right"
                }`}
              >
                {msg.isWarning ? (
                  <div className="text-xs text-red-600 italic">
                    {msg.text}
                  </div>
                ) : msg.isFormatted ? (
                  <div>
                    <strong className="block text-base mb-1">💊 {msg.title}</strong>
                    <div><strong>Description:</strong> {msg.description}</div>
                    <div className="mt-1"><strong className="text-green-700">✅ Pro:</strong> {msg.pro}</div>
                    <div className="mt-1"><strong className="text-red-700">⚠️ Con:</strong> {msg.con}</div>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            ))}
            {loading && <div className="text-blue-700">Typing...</div>}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-300">
            <input
              type="text"
              className="flex-1 p-2 text-sm outline-none"
              placeholder="Ask about products..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              aria-label="Chat input"
            />
            <button
              onClick={handleSend}
              className="bg-blue-900 text-white px-3 text-sm"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={toggleChat}
            className="border border-blue-900 bg-white text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
            aria-label="Open chat"
          >
            <img src={robo} alt="Chatbot" className="w-8 h-8" />
          </button>

          {showPopup && (
            <div className="absolute bottom-16 right-0 bg-white text-sm text-gray-800 px-4 py-2 rounded-lg shadow-md border border-blue-900 animate-fadeIn w-64">
              Hello, how can I assist today?
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GeminiChatbot;
