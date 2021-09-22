import React from 'react';
import logo from './logo.svg';
import Accordion from './components/Accordion';
import Gallery from './components/Gallery';
import Tabs from './components/Tabs';
import TabContent from './constants/TabContents';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gallery />
        <h1>Tabs</h1>
        <Tabs content={TabContent} />
        <Accordion />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
