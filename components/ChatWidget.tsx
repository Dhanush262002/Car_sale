import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';
import { streamChatResponse } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi there! I\'m ThanyaBot. Looking for a specific car or bike today?', timestamp: new Date() }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    let fullResponse = "";
    // Create a placeholder for the bot response
    const botMsgTimestamp = new Date();
    
    // Convert current messages for history (excluding the one we just added to state but including it for the API call context if needed)
    // We pass previous history + new message to the service helper
    const history = messages.map(m => ({ role: m.role, text: m.text }));

    await streamChatResponse(
        history, 
        userMsg.text, 
        (chunk) => {
            fullResponse += chunk;
            setMessages(prev => {
                const last = prev[prev.length - 1];
                if (last.role === 'model' && last.timestamp === botMsgTimestamp) {
                    // Update existing message
                    return [...prev.slice(0, -1), { ...last, text: fullResponse }];
                } else {
                    // Create new message
                    return [...prev, { role: 'model', text: fullResponse, timestamp: botMsgTimestamp }];
                }
            });
            setIsTyping(false);
            scrollToBottom();
        }
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden mb-4 flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-red-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="animate-pulse" />
                <h3 className="font-bold">ThanyaBot Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-red-700 p-1 rounded">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black/50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-red-600 text-white rounded-br-none'
                        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-2xl rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about cars..."
                  className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white p-2 rounded-lg transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`shadow-[0_0_20px_rgba(220,38,38,0.5)] bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${isOpen ? 'rotate-90 opacity-0 pointer-events-none absolute' : 'opacity-100'}`}
      >
        <MessageSquare size={28} />
      </button>
    </div>
  );
};

export default ChatWidget;