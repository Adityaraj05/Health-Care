
import '../componant/Chatbot.css'
import React from 'react'
import { useState } from 'react';
import chatbotimg from '../componant/chatbotimg.jpg'

export default function Chatbot_1() {
    const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text:'Type the following question. Symptoms of common cold . What is first aid?' }]);
  const [messages1, setMessages1] = useState([{ sender: 'bot', text:'Symptoms of common cold . What is first aid?' }]);
  const [inputValue, setInputValue] = useState('');

  const predefinedAnswers = {
    'hii':'Hii, I am here to help you.Type Symptoms of common cold (write the disease name in lower case).',
    'Hii':'Hii, I am here to help you. Type Symptoms of common cold (write the disease name in lower case).',
    'hello':'Hello, I am here to help you.Type Symptoms of common cold (write the disease name in lower case).',
    'Hii':'Hello, I am here to help you.Type Symptoms of common cold (write the disease name in lower case).',
    'symptoms of common cold':'Runny nose, Fever, Cough, Headache, Weakness,Fainting, Sore throat and Rhintis.',
    'symptoms of malaria':'Vomiting, Fever, Fatigue, Headache, Nausea, Muscle aches and Chill.',
    'symptoms of covid 19':'Cough, Fever, Nausea and Sore Throat.',
    'symptoms of cholera':'Low blood pressure, Vomiting, Diarrhea, Rapid weight loss, increased thirst and loss of skin elasticity.',
    'symptoms of fever':'High body temperature, Sweating, Chills and shivering,Headache,Muscle aches and joint pain,Fatigue and weakness and Sore Throat.',
    'symptoms of dengue':'high fever, severe headache, joint and muscle pain, rash, and fatigue.',
    'symptoms of asthma':'wheezing, shortness of breath, coughing, and chest tightness.',
    'symptoms of pneumonia':'fever, cough, chest pain, difficulty breathing, and fatigue',
    'symptoms of tuberculosis':'Persistent cough, weight loss, night sweats, fatigue, and chest pain ',
    'Symptoms of common cold':'Runny nose, Fever, Cough, Headache, Weakness,Fainting, Sore throat and Rhintis.',
    'Symptoms of malaria':'Vomiting, Fever, Fatigue, Headache, Nausea, Muscle aches and Chill.',
    'Symptoms of covid 19':'Cough, Fever, Nausea and Sore Throat.',
    'Symptoms of cholera':'Low blood pressure, Vomiting, Diarrhea, Rapid weight loss, increased thirst and loss of skin elasticity.',
    'Symptoms of fever':'High body temperature, Sweating, Chills and shivering,Headache,Muscle aches and joint pain,Fatigue and weakness and Sore Throat.',
    'Symptoms of dengue':'high fever, severe headache, joint and muscle pain, rash, and fatigue.',
    'Symptoms of asthma':'wheezing, shortness of breath, coughing, and chest tightness.',
    'Symptoms of pneumonia':'fever, cough, chest pain, difficulty breathing, and fatigue',
    'Symptoms of tuberculosis':'Persistent cough, weight loss, night sweats, fatigue, and chest pain ',
   'What is first aid?': 'First aid refers to the initial medical assistance and care provided to a person who has been injured or suddenly falls ill before professional medical help arrives. It involves assessing the situation, applying basic medical techniques, and providing immediate care to stabilize the persons condition and prevent further harm.',
  'How to use chatbot?': 'Type some predefined question which are as follows.Type what is first aid? ',
  // Add more predefined questions and answers as needed

    // Add more predefined questions and answers as needed
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
    const userMessage = { sender: 'user', text: inputValue };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');

    if (predefinedAnswers.hasOwnProperty(userMessage.text)) {
      const botReply = { sender: 'bot', text: predefinedAnswers[userMessage.text] };
      setMessages([...updatedMessages, botReply]);
    } else {
      // Send message to server-side for processing (replace with your server endpoint)
      sendToServer(userMessage.text);
    }
  };

  const sendToServer = (message) => {
    // Simulate server response (replace with your server-side implementation)
    const response = generateChatbotResponse(message);
    const botReply = { sender: 'bot', text: response };
    setMessages([...messages, botReply]);
  };
  
  const generateChatbotResponse = (message) => {
    // Implement your server-side AI logic here
    // You can make an HTTP request to your server or use WebSockets to communicate with the server-side code.
    // The server-side code should handle the NLP processing and generate the appropriate response.
    // This example uses a simple response echoing the message back.
    return `I'm sorry, I don't have a predefined answer for that question. Please ask another question.`;
  };

  

  return (
    <div>
      <div className="chatbot">
      {isChatOpen && (
        <div className="chat-container">
          <div className="message-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input className='type--1'
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button className='sendbtn' onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      <div className="chatbot-icon" onClick={toggleChat}>
      <img className='chatbot-img' src={chatbotimg} alt="" />
      </div>

      {!isChatOpen && <div className="chatbot-message">How can I help you?</div>}
    </div>
  
    

    </div>
  )
}
