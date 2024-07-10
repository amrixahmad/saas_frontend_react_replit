import React, { useState, useRef, useEffect } from 'react';
import { Image, Send} from 'react-feather'

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '' && !imageFile) return;

    const newMessage = {
      text: input,
      image: imageFile,
      sender: 'user'
    };

    setMessages([...messages, newMessage]);
    setInput('');
    setImageFile(null);

    // Here you would typically send the message to your LLM API
    // and wait for a response. For this example, we'll just simulate a response.
    setTimeout(() => {
      const botResponse = {
        text: "This is a simulated response from the multimodal LLM.",
        sender: 'bot'
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(URL.createObjectURL(file));
  };

  return (
    <div className="card flex-grow-1 mb-0">
      <div className="card-body">
        <div className="chat-messages p-4">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message-${message.sender} pb-4`}>
              <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                {message.image && (
                  <img src={message.image} alt="Uploaded" className="img-fluid mb-2" style={{maxHeight: '200px'}} />
                )}
                <div>{message.text}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="card-footer">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Type your message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <label className="btn btn-outline-secondary">
              <Image />
              <input
                type="file"
                hidden
                onChange={handleImageUpload}
                accept="image/*"
              />
            </label>
            <button type="submit" className="btn btn-primary">
              <Send />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;