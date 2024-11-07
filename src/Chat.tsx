import React, { useState } from 'react';
import axios from 'axios';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: 'bot', text: 'Oi! Como você está se sentindo hoje?' },
  ]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };




  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-bison:generateMessage',
        {
          prompt: {
            messages: [
              ...messages.map((msg) => ({
                author: msg.sender,
                content: msg.text,
              })),
              { author: 'user', content: input },
            ],
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_GEMINI_API_KEY}`,
          },
        }
      );

      const botMessage = {
        sender: 'bot',
        text: response.data.candidates[0].content,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Erro ao se comunicar com a API Gemini:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Desculpe, ocorreu um erro. Tente novamente mais tarde.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <strong>{msg.sender === 'bot' ? 'Amigo Virtual' : 'Você'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Digite sua mensagem..."
        disabled={loading}
      />
      <button onClick={handleSendMessage} disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
    </div>
  );
};

export default Chat;
