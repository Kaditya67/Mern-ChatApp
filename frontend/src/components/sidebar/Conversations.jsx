import React from 'react';
import Conversation from './Conversation';

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {Array(4).fill().map((_, index) => (
        <Conversation key={index} />
      ))}
    </div>
  );
};

export default Conversations;
