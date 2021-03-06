import React, { useState, useEffect } from 'react';
import { Button, InputLabel, Input, FormControl } from '@material-ui/core';
import Message from './components/Message';
import db from './components/FireBase/FireBase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import './App.css';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');

  
useEffect(() => {
  //run once when the app component loads
  db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
  });
}, []);


  useEffect(() => {
   setUserName(prompt('Please enter your name'));
  }, []) 
  
  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
    <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
    <h1>Facebook Messenger</h1>
    <h2>Welcome {userName}</h2>

    <form className="App__form">
    <FormControl className="App__formControl">
      <Input className="App__input"
      placeholder='Enter a message...'  
      value={input}
      onChange={event => setInput(event.target.value)}
      />
    <IconButton className="App__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
    <SendIcon/>
    </IconButton>

    </FormControl>
    </form>


    <FlipMove>
    {
    messages.map(({ id, message }) => (
      <Message key={id} username={userName} message={message}/>
      ))
    }
    </FlipMove>




    {/* messages themselves*/}
    </div>
  );
}

export default App;
