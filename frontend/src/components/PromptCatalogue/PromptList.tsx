import React from 'react';
import PromptItem from './PromptItem';

interface Prompt {
  id: number;
  title: string;
  description: string;
}

interface PromptListProps {
  prompts: Prompt[];
}

const PromptList: React.FC<PromptListProps> = ({ prompts }) => {
  return (
    <div className="promptList">
      {prompts.map((prompt: Prompt) => (
        <PromptItem key={prompt.id} title={prompt.title} description={prompt.description} />
      ))}
    </div>
  );
};

export default PromptList;
