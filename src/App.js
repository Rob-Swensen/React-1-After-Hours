import React from 'react';
import './App.css';
import CoverImage from './Components/CoverImage'
import FidgetClicker from './Components/FidgetClicker'
import FriendsList from './Components/FriendsList'


function App() {
  return (
    <div className="App">
      <CoverImage/>
      <FidgetClicker/>
      <FriendsList/>
    </div>
  );
}

export default App;
