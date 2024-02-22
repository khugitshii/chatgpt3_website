import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatgpt3.css';

const Whatgpt3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="ChatGPT-3 is a state-of-the-art language model developed by OpenAI. It uses a neural network architecture and is trained on a vast amount of text data to generate human-like responses to a wide range of natural language queries and prompts. ChatGPT-3 has been widely used for various applications, including chatbots, language translation, and text generation." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="A chatbot is a computer program designed to simulate human conversation through voice or text interactions." />
      <Feature title="Knowledgebase" text="The knowledge base of ChatGPT is derived from the text data it was trained on, rather than from a predefined database of information." />
      <Feature title="Education" text="ChatGPT-3 can be used in education for tasks such as language learning, creating educational content, and providing personalized tutoring." />
    </div>
  </div>
);

export default Whatgpt3;