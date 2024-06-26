import React from 'react';
import PromptItem from './PromptItem';

const PromptList = ({ prompts }) => {
  return (
    <div className="promptList">
      {prompts.map(prompt => (
        <PromptItem key={prompt.id} title={prompt.title} description={prompt.description} />
      ))}
    </div>
  );
};

export default PromptList;
