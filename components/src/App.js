import React from 'react';
import './App.css';
import faker from 'faker';

import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard author="Sam" 
      timeAgo="Today at 4:45PM" 
      avatar={faker.image.avatar()} 
      content="Such a great day!"/>
      
      <ApprovalCard author="Alex" 
      timeAgo="Yesterday at 6:45PM" 
      avatar={faker.image.avatar()} 
      content="What are you doing in her bed?"/>
      <ApprovalCard author="Antony" 
      timeAgo="Tomorrow at 7:45PM" 
      avatar={faker.image.avatar()} 
      content="How are you?"/>
      <ApprovalCard author="Peter" 
      timeAgo="Today at 10:45AM" 
      avatar={faker.image.avatar()} 
      content="You want to make love, right?"/>
      <ApprovalCard author="Sarah" 
      timeAgo="Today at 11:25PM" 
      avatar={faker.image.avatar()} 
      content="You are so beatiful tonight!"/>
    </div>
  );
}

export default App;
