import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Natural Language Processing',
    text:  'ChatGPT is capable of understanding and responding to natural language queries and prompts, making it a powerful tool for conversational AI applications.',
  },
  {
    title: 'Text Generation',
    text: 'ChatGPT can generate high-quality text based on a given prompt, making it useful for tasks such as content creation, language translation, and text summarization.',
  },
  {
    title: 'Large Scale',
    text: 'ChatGPT has been trained on a vast amount of text data, making it one of the largest and most powerful language models currently available.',
  },
  {
    title: 'Flexibility',
    text: 'ChatGPT can be fine-tuned for specific tasks, allowing it to be customized for a wide range of applications and use cases.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;