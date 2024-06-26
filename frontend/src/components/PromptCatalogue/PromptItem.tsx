import React from 'react';

const PromptItem = ({ title, description }) => {
  return (
    <div className="promptItem">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PromptItem;
