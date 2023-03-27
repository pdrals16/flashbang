import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import './App.css';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vw;
  padding-top: 50px;
  background-image: linear-gradient(180deg, #002f52 35%, #326589 100%);
`

const Titulo = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 2000;
  font-size: 50px;
  text-align: center;
  color: #fff;
`

const BadwordContainer = styled.div`
  width: 100vw;
  height: 100vw;
  text-align: center;
`

const TextArea = styled.textarea`
  order: 1px solid #fff;
  background: transparent;
  border: 1px solid #fff;
  padding: 20px 20px;
  border-radius: 5px;
  width: 400px;
  height: 100px;
  word-wrap: break-word;
  word-break: break-all;
  color: #fff;
  font-size: 24px;
  font-family: 'Courier New', Courier, monospace;

  &::placeholder {
    color: #fff;
    font-size: 24px
  }
`

const AnswerContainer = styled.p`
  padding-top: 10px;
  font-size: 24px;
  font-family: 'Courier New', Courier, monospace;
  color: #fff;
`

function App() {
  const [textUser, setTextUser] = useState('')
  const [text, setText] = useState('');
  const [message, setMessage] = useState({})

  useEffect(()=> {
    axios.post('/badwords', {"text":text}).then(response=>setMessage(response.data))
  }, [text]);

  const handleChange = (event) => {
    setTextUser(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setText(textUser);
    }
  };

  return (<AppContainer>
            <Titulo>Badword Filter</Titulo>
            <BadwordContainer>
              <TextArea 
                placeholder='Write your TOXIC message'
                rows="10" 
                cols="100" 
                wrap="soft" 
                maxlength="200"
                onChange={handleChange}
                onKeyDown={handleKeyDown}>
              </TextArea>
              <AnswerContainer>{message.alternative}</AnswerContainer>
            </BadwordContainer>
          </AppContainer>);
  }

export default App;
